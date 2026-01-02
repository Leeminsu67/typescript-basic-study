/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat =
  Math.random() > 0.5
    ? {
        name: "별이",
        age: 12,
      }
    : {
        name: "오리",
        breed: "코리안 길냥이",
      };

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

/**
 * const dogOrCat: {
    name: string;
    age: number;
    breed?: never;
} | {
    name: string;
    breed: string;
    age?: never;
}
유추된 객체 타입 유니언
 */

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat =
  Math.random() > 0.5
    ? {
        name: "별이",
        age: 12,
      }
    : {
        name: "오리",
        breed: "코리안 길냥이",
      };

dogOrCat2.name;
// dogOrCat2.age;
// dogOrCat2.breed;

if ("age" in dogOrCat2) {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.age;
} else {
  dogOrCat2;
  dogOrCat2.name;
  dogOrCat2.breed;
}

// 유추를 하고 내로잉을 통해서 명확한 타입을 이용해야 자동완성도 되고 에러도 안 나게 사용할 수 있다
