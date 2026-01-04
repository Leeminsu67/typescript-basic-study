/**
 * Infer Keyword
 *
 * 유추하다
 *
 * (Inferring Type in Conditional Type)조건부 타입
 *
 * Infer Keyword는 Conditional Type에서만 사용 가능한 키워드다
 * 그러니 extends 키워드를 사용했을때 extend 한 대상에서 타입을 한번 더 추론하는 역할을 한다
 */

// 1) 가장 많이 사용하는 예제
// Flattening -> Array를 벗겨낼 때
// string[] -> string
// string[][] -> string[]
type Flatten<Type> = Type extends Array<infer ElementType> ? ElementType : Type;
type Flatten2<Type> = Type extends (infer ElementType)[] ? ElementType : Type;

// string
type StringArray = Flatten<string[]>;
// number[]
// number
type NumberArray = Flatten<number[]>;
type TwoDArray = Flatten2<boolean[]>;

// 2) Return Type 추론
type InferReturnType<Type> = Type extends (...args: any) => infer ReturnType
  ? ReturnType
  : Type;

// type NumberArray2 = InferReturnType<number[]>;
type StringFunc = InferReturnType<() => string>;
type NumberFunc = InferReturnType<() => number>;
