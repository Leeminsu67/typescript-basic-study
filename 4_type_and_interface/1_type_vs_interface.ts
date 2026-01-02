/**
 * Type vs Interface
 *
 * Type 보다 Interface가 나중에 만들어졌다
 */

// Object 선언
interface IObject {
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
};

// function 선언
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * interface에서는 할 수 없는것들
 */

// 1) primitive 타입 선언
type Name = string;

// 2) union 타입 선언
type UnionType = string | number;

// 3) primitive list 또는 tuple 타입 선언
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
interface IRectangle {
  height: number;
}

interface IRectangle {
  width: number;
}

// 중첩해서 추가할 수 있다
let rectangle: IRectangle = {
  height: 200,
  width: 200,
};

// type TRectangle = {
//   height: number;
// };

// type TRectangle = {
//   width: number;
// };

/**
 * Interface Merging
 *
 * 새로 만든 이유
 */
class Review {
  // 프로퍼티(인스턴스 귀속)
  getY = (x: number) => {
    return x;
  };

  // 메서드(프로토 타입에 귀속)
  getX(x: number) {
    return x;
  }
}

// 프로퍼티
interface GetXnY {
  getX: (x: number) => number;
  getY: (y: number) => number;
}

interface GetXnY {
  getX: (x: number) => number;
  // getY: (y: string) => number;
}

// 메서드
interface GetXnY2 {
  getX(x: number): number;
  getY(y: number): number;
}

// 메서드에서는 된다
interface GetXnY2 {
  getX(x: number): number;
  getY(y: string): number;
}

const testMethod: GetXnY2 = {
  getX(x) {
    return x;
  },
  getY(y) {
    return 1;
  },
};
