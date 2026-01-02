/**
 * Extension
 */
// type 같은 경우에는 never 타입이 나와도 extends를 가능하게 해준다
// interface는 never 타입이 나오면 에러를 바로 반환해준다
interface IName {
  name: string;
}

interface IIdol extends IName {
  age: number;
}

const idol: IIdol = {
  name: "안유진",
  age: 23,
};

type TName = {
  name: string;
};

type TIdol = TName & {
  age: number;
};

const idol2: TIdol = {
  name: "아이유",
  age: 29,
};

interface IIdol2 extends TName {
  age: number;
}

const idol3: IIdol2 = {
  name: "제니",
  age: 29,
};

type TIdol2 = IName & {
  age: number;
};

const idol4: TIdol2 = {
  name: "지수",
  age: 31,
};

/**
 * extending multiple
 */

type DogName = {
  name: string;
};

type DogAge = {
  age: number;
};

type DogBreed = {
  breed: string;
};

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
  name: "코드팩토리",
  age: 32,
  breed: "Poodl",
};

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: "mingdev",
  age: 32,
  breed: "ddd",
};

/**
 * Overrding
 */
type THeight = {
  height: number;
};

type TRectangle = THeight & {
  height: string;
  width: number;
};

// const rectangle: TRectangle = {
//   height: ,
//   width: 100
// }

type TWidth = {
  width: number | string;
};

type TRectangle2 = TWidth & {
  width: number;
  hegith: number;
};

const rectangle: TRectangle2 = {
  hegith: 100,
  width: 200,
};

interface IHeight {
  height: number;
}

// interface IRectangle extends IHeight {
//   height: string;
//   width: number;
// }

interface IWidth {
  width: number | string;
}

interface IRectangle extends IWidth {
  width: number | string;
  height: number;
}
