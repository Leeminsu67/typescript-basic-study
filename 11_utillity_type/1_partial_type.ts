/**
 * Partial Type
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yuJin: Idol = {
  name: "안유진",
  age: 23,
  groupName: "아이브",
};

// 해당 타입객체에서 원하는 부분만 받고 싶은경우
function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
  return {
    ...original,
    ...updates,
  };
}

console.log(updateIdol(yuJin, { age: 27, name: "mingdev" }));
