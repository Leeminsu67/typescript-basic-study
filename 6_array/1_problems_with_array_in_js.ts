/**
 * Problems with Array in JS
 */
const numbers = [1, "2", 3, "4", 5];

let strings: string[] = ["1", "2", "3"];

// strings.push(1);

// string과 number를 섞어서 넣을 수 있는 array
let stringsOrNumbersArray: (string | number)[] = [1, "2", 3, "4"];

// string[] 이거나 nubmer[]인 array
let stringArrNumberArr: string[] | number[] = [1, 2, 3];

stringArrNumberArr = ["1", "2", "3"];

let stringOrNumberArr: string | number[] = [1, 2, 3];

stringOrNumberArr = "3";

// 타입유추
let boolsArr = [true, false, true];

// boolsArr.push(1);

const onlyString = ["1", "2", "3"];
const onlyNumbers = [1, 2, 3];

for (let i = 0; i < onlyString.length; i++) {
  let item = onlyString[i];
}

for (let item of onlyNumbers) {
}

let number3 = onlyNumbers[0];

// index의 길이를 타입스크립트는 신경쓰지 않는다
// 튜플이면 길이도 신경을 써서 에러를 반환해준다
let number4 = onlyNumbers[9999];
