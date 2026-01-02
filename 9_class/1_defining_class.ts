/**
 * Class 선언하기
 */
class SampleClass {}

// 타입스크립트에서는 클래스 안에 변수들은 타입을 선언해줘야 한다
// 기본값 설정 및 생성자로 초기값을 넣어줘야한다
class Game {
  name: string;
  country: string;
  download: number;

  constructor(name: string, country: string, download: number) {
    this.name = name;
    this.country = country;
    this.download = download;
  }

  introduc() {
    return `${this.name}은 ${this.country}에서 제작된 ${this.download}개의 다운로드를 달성한 게임입니다.`;
  }
}

const starcraft = new Game("Star Craft", "USA", 10000000);

const retVal = starcraft.introduc();

// starcraft.changeGame();
