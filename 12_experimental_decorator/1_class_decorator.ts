/**
 * Class Decorator
 */

// 데코레이터를 쓰면 클래스의 선언을 제일 처음 읽을때 데코레이터가 실행된다
@Test
@Frozen
@LogTest("PROD")
@ChangeClass
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function Test(constructor: Function) {
  console.log(constructor);
}

function Frozen(constructor: Function) {
  // 객체
  Object.freeze(constructor);
  // 객체의 프로토타입
  Object.freeze(constructor.prototype);
}

const yuJin = new Idol("안유진", 2003);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory
function LogTest(env: string) {
  return function (constructor: Function) {
    console.log(`[${env}] ${constructor}가 실행되었습니다`);
  };
}

console.log("----------------------------");

const wonYoung = new Idol("장원영", 22);
console.log(wonYoung);

function ChangeClass<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    groupName = "아이브";

    constructor(...params: any[]) {
      super(...params);

      console.log("change");
    }
  };
}
