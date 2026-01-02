/**
 * Property Initialization
 */
class Person {
  //일반적인 필수값 선언법
  name: string;
  // 초기값 제공 선언법
  age: number = 23;
  // optional 값 선언법
  pet?: string;
  // type of undefined 선언법
  petAge: number | undefined;

  constructor(name: string, pet?: string) {
    this.name = name;
    if (pet) {
      this.pet = pet;
    }
  }
}

class RouteStack {
  // 무조건 초기화가 되는것을 타입스크립트에게 알려주기 위해서는 ! 를 쓰면 된다
  stack!: string[];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.stack = [];
  }
}
const routeStack = new RouteStack();
console.log(routeStack);
