/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await afterTwoSeconds();
  console.log(res);
};

runner();

// Promise의 반환값을 알고 싶을때는 Promise<> 제너릭안에 반환받을 값이나 타입을 넣어주면 된다
const afterOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await afterOneSecond();
  console.log(res);
};

runner2();

const runner3 = async function () {
  return `string return`;
};
