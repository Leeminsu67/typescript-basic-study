/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다
 */
type NewStringType = string;

type NewNullType = null;

// interface는 이렇게 프리미티브 형태로 선언할수는 없다
type NewNumberType = number;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};

const yuJin: IdolType = {
  name: "안유진",
  year: 2003,
};

/**
 * Interface
 *
 * 객체형태로 들어감
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yuJin2: IdolInterface = {
  name: "안유진",
  year: 2003,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yuJin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const yuJin4: IdolOptional = {
  name: "안유진",
};
