/**
 * Readonly Type
 */
interface Cat {
  name: string;
  age: number;
}

const nyaong: Cat = {
  name: "냐옹이",
  age: 8,
};

nyaong.name = "mingdev";

const bori: Readonly<Cat> = {
  name: "보리",
  age: 7,
};

// error
// bori.name = "아이유";

// readonly와 freeze를 섞어서 쓸 때가 많다
// Readonly는 타입스크립트만 허용이 되고 무시하고 작성해서 컴파일을 해버리면
// JS에서는 인식되기 때문에 freeze로 해주면 똑같은 기능을 하기 때문이다
Object.freeze(bori);
