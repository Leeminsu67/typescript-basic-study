/**
 * Multi Dimension Array
 */

/**
 * (1)
 * [1,2,3]
 *
 * (2)
 * [
 *  [1,2,3],
 *  [1,2,3]
 * ]
 *
 * (3)
 * [
 *  [
 *    [1,2,3]
 *  ]
 * ]
 */
const numb2DArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

const str2DArr = [
  ["1", "2"],
  ["3", "4"],
];

const strAndNumberArr: (number | string)[][] = [
  [1, "2"],
  [3, "4"],
];

let strArrOrNumArr: string[][] | number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

strArrOrNumArr = [
  ["1", "2"],
  ["3", "4"],
];

for (let arr of numb2DArr) {
  for (let item of arr) {
    item;
  }
}
