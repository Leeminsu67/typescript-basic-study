/**
 * readonly 프로퍼티
 */
class Idol {
  readonly name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const yuJin = new Idol("안유진", 23);

yuJin.age = 32;
// error
// yuJin.name = "코드팩토리";

// readonly로 선언하면 코드를 작성할 때 변경하는것을 막아준다
