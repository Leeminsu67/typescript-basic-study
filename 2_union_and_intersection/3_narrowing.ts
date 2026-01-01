/**
 * Narrowing
 *
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다
 */
// let numberOrString: number | string = "Code factory";
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// narrowing된 타입으로 되어서 자동 완성도 나오지 않고 에러가 반환된다
// numberOrString.toFixed(2);

/**
 * Narrowing 종류
 *
 * 1) Assigment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) discrimated union Narrowing(차별된 유니언 내로잉)
 * 8) exhaustiveness checking
 */

// 1) Assigment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString: number | string = "아이유";

numberOrString.toString();

// 2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 1123 : "아이유";

if (typeof numberOrString === "string") {
  // string 타입으로 유추함
  numberOrString;
} else {
  // number 타입으로 유추함
  numberOrString;
}

// 3) Truthiness Narrowing
let nullOrString: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrString) {
  nullOrString;
} else {
  nullOrString;
}

// 4) Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : "아이유";
let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numberOrString2 === stringOrBool2) {
  numberOrString2;
  stringOrBool2;
} else {
  numberOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
} else {
  numberOrStringOrNull;
}

// 5) in operator Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};

let dog: Dog = {
  name: "오리",
  type: "Yorkshire Terrier",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;

// operator가 있는지 체크한 다음 타입을 유추
if ("type" in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// 6) instanceof Narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : "코드팩토리";

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// 7) discrimated union Narrowing
interface Animal {
  type: "dog" | "human";
  height?: number;
  // 강아지의 종
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "요크셔",
      };

if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
  animal.height;
}

// 여러개로 나눠서 선언하고
interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

interface Fish2 {
  type: "fish";
  length: number;
}

// 유니온으로 묶어주는게 타입으로써 유리하다
type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : Math.random() > 0.5
    ? {
        type: "dog",
        breed: "요크셔",
      }
    : {
        type: "fish",
        length: 12,
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

// 8) exhaustiveness checking
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2;
    break;
  case "dog":
    humanOrDog2;
    break;

  case "fish":
    humanOrDog2;
    break;

  default:
    // never
    humanOrDog2;

    const _check: never = humanOrDog2;
    break;
}
