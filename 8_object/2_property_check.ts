/**
 * Property Check
 *
 * 초과 속성 검사
 */
type TName = {
  name: string;
};

type TAge = {
  age: number;
};

// error
// const iu: TName = {
// const iu: TAge = {
const iu = {
  name: "아이유",
  age: 30,
};

// 초과되는 값들이 있어도 할당이 가능하다
const testName: TName = iu;
const testAge: TAge = iu;
