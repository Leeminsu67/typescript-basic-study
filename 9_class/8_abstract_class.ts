/**
 * Abstract class
 *
 * 이 자체로는 인스턴스화를 할 일은 없는데 공유되는 값들을 정의하고 상속을 할 때
 */
abstract class ModelWithId {
  id: number;

  constructor(id: number) {
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);

// 쓰는 경우
class Product extends ModelWithId {}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
  abstract shout(name: string): string;
}

// abstract를 하면 해당 메소드를 강제할 수 있다
class Person extends ModelWithAbstractMethod {
  shout(name: string): string {
    return `소리질러~`;
  }
}
