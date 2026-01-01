/**
 * Intersection
 *
 * And
 */
interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

// 더해진다
let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01022221111",
  address: "대한민국",
};

// never 타입으로 나온다(존재하지 않는 상황)
type NumberAndString = number & string;

// let numberAndString: NumberAndString = undefined;
