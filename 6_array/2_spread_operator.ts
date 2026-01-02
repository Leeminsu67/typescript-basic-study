/**
 * Spread Operator
 */
const onlyString = ["1", "2", "3", "4", "5"];
const onlyNumbers = [1, 2, 3, 4];

// 타입에 따라서 유추를 잘 할 수 있다
const arr1 = [...onlyString];

const arr2 = [...onlyString, ...onlyNumbers];
