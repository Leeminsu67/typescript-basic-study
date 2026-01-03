/**
 * Required Type
 */
interface Dog {
  name: string;
  age?: number;
  country?: string;
}

// Required<> 제너릭에 넣은 타입이 옵셔널이 없고 전부 필수인 상태로 만들어줄 수 있다
const requiredDog: Required<Dog> = {
  name: "모찌",
  age: 7,
  country: "한국",
};
