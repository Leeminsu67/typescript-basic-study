/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as IM, rose, number, type ICat } from "./2_export_1";

// console.log(new IM("아이유", 32));
// console.log(new IdolModel("아이유", 32));

// import * as allTogether from "./2_export_1";

// console.log(allTogether.number);

// const cat: allTogether.ICat = {
//   name: "오리",
//   age: 2,
// };

// import cf, { rose, number } from "./2_export_1";

// console.log(cf);
// console.log(rose);

// tsconfig baseUrl 설정을 하고 나면 쓸 수 있다 이렇게
import { IdolModel } from "15_import_and_export/2_export_1";

console.log(new IdolModel("아이유", 32));
