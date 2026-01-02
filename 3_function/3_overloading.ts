/**
 * Overloading
 */
/**
 * 파라미터
 * 1) 하는 받거나
 * 2) 세개를 받는 함수
 *
 * 순서만 맞으면 상관없다
 */

// 이렇게 선언을 한다면 제일 마지막에 있는 함수는
// 파라미터가 1개나 3개만 받는 함수가 된다
function stringOrString(members: string): stirng;
// function stringOrString(member1: string, member2: string): stirng;
function stringOrString(
  member1: string,
  member2: string,
  member3: string
): stirng;

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다
 * 예) '안유진, 장원영, 레이'
 *
 * 만약에 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다
 * 예) '안유진', '장원영', '레이'
 */
function stringOrString(
  memberOrMembers: string,
  member2?: string,
  member3?: string
): string {
  if (member2 && member3) {
    return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
  } else {
    return `아이브: ${memberOrMembers}`;
  }
}

console.log(stringOrString("안유진, 장원영, 레이"));
console.log(stringOrString("안유진", "장원영", "레이"));
// console.log(stringOrString("안유진", "장원영"));

// 웬만하면 오버로딩을 사용하지 않는걸 추천
// 헷갈릴 수 있기 때문
