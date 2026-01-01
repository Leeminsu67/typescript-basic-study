/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = "false";

// const를 쓰면 정확히 이 문자만 쓸 수 있다
// const를 쓰면 정확히 이 값하고 타입만 쓸 수 있다
const constStringType: "const string" = "const string";
const constBooleanType = true;

let yuJin = {
  name: "안유진",
  age: 2003,
};

const yuJin2 = {
  name: "안유진",
  age: 2003,
};

yuJin2.name = "코드팩토리";
console.log(yuJin2);

// 캐스팅 구체화된 값을 넣을 수 있다
const yuJin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// 다른값으로 변경 불가
// yuJin3.name = "mingdev";

// 추론으로 값하고 타입을 받을 수 있다
console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5", "6"];

// error
// numbers.push("6");
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[6];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3];
