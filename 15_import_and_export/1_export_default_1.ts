/**
 * Export
 */
class IdolModel {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const number = 12;
// export default number;

// 타입스크립트 타입이라서 객체가 아니라서 못한다
interface ICat {
  name: string;
  breed: string;
}

export default {
  IdolModel,
  number,
};
