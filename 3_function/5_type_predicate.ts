/**
 * Type Predicate
 */
// 반환 타입을 변수 is 타입이라고 적어주는게 중요하다
// 내로잉을 했을때 정확하게 타입을 타입스크립트가 유추 할 수 있다
function isNumber(input: any): input is number {
  return typeof input === "number";
}

console.log(isNumber(10));

// 일반 boolean 타입으로 한다면 정확한 타입을 유추하지 못한다
function isNumberRetBool(input: any): boolean {
  return typeof input === "number";
}

let number: any = 5;

if (isNumberRetBool(number)) {
  number;
}

// number타입이라고 타입스크립트가 인지한다
if (isNumber(number)) {
  number;
}

interface Doge {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat =
  Math.random() > 0.5
    ? {
        name: "도지",
        age: 32,
      }
    : {
        name: "오리",
        breed: "코리안 길냥이",
      };

if (isDoge(doge)) {
  doge;
} else {
  doge;
}
