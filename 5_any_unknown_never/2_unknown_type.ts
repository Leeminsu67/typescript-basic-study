/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = "아이유";
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

// 어떤 타입을 넣던지 에러가 나지 않는다
let unknownValue: unknown;

unknownValue = 24;
unknownValue = "아이유";
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
// any와 unknon에만 할당이 가능하다
let booleanType: boolean = unknownValue;
let arrayType: string[] = unknownValue;
let objectType: {} = unknownValue;
let nullType: null = unknownValue;
let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown): target is string {
  return typeof target === "string";
}

let testVal: unknown;

if (isString(testVal)) {
  testVal;
} else {
  testVal;
}

/**
 * Union Type
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
// any가 있다면 any로 반환됨
type uOrAny = unknown | any;
type anyOrU = any | unknown;

/**
 * Intersection Type
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
// 이것도 any
type uAndAny = unknown & any;

/**
 * Operator 사용
 */

let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
