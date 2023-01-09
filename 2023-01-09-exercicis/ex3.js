const arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
const n = 4;

const maxSubarray = (array, int) => {
  let sum = 0;
  let resultArr;
  let subArr = [];
  let currentSum = 0;
  for (let i = 0; i + int <= array.length; i++) {
    currentSum = 0;
    subArr = array.slice(i, i + int);
    for (let i = 0; i <= subArr.length - 1; i++) {
      currentSum += subArr[i];
    }
    console.log(currentSum);
    if (currentSum > sum) {
      resultArr = subArr;
      sum = currentSum
    }
  }
  return resultArr;
};

console.log(maxSubarray(arr, n));
