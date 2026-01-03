/**
 * Generic in Inheritance
 */
class BaseCache<T> {
  data: T[] = [];
}

class StiringCache extends BaseCache<string> {}

const stringCache = new StiringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T> {
  message?: Message;

  constructor(message?: Message) {
    super();

    message && (this.message = message);
  }
}

const genericChild = new GenericChild<string, string>("error");

genericChild.data;
genericChild.message;

/**
 * 제너릭의 inheritance
 */
interface BaseGeneric {
  name: string;
}

// extends한 타입을 인스턴스화 할 때 강제할 수 있다
class Idol<T extends BaseGeneric> {
  information: T;

  constructor(information: T) {
    this.information = information;
  }
}

const yuJin = new Idol({ name: "안유진", age: 23 });

/**
 * keyof 함께 사용하기
 */
const testObj = {
  a: 1,
  b: 2,
  c: 3,
};

// K extends keyof O
// K는 어떤구조를 강제할건데 O객체의 키값들을 타입으로 강제할거다
function objectParser<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

const val = objectParser(testObj, "c");

/**
 * Ternary
 * 1 === 2 ? true: false
 */
class Idol2 {
  type?: string;
}

class FemaleIdol extends Idol2 {
  type: "Female Idol" = "Female Idol";
}

class MaleIdol extends Idol2 {
  type: "Male Idol" = "Male Idol";
}

type SpecificIdol<T extends Idol2> = T extends MaleIdol ? MaleIdol : FemaleIdol;

const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
