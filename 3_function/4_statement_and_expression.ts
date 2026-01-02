/**
 * Statement and Expression
 */
// statement (문장)
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

// expression (표현식)
const addTwoNumbersExp = (x: number, y: number) => {
  return x + y;
};

/**
 * Statement
 */
function add(x: number, y: number): number {
  return x + y;
}

function subject(x: number, y: number): number {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

/**
 * Expression
 */
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function (x, y) {
  return x + y;
};

const subject2: CalculationType = function (x, y) {
  return x - y;
};

const multiply2: CalculationType = function (x, y) {
  return x * y;
};

const divide2: CalculationType = function (x, y) {
  return x / y;
};

// Expression을 사용하는게 함수를 사용할 때 유리하다
// 재활용을 해서 코드가 더 깔끔해지고 가독성이 좋아지기 때문
