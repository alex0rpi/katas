const repeatedGroups = (arr) => {
  let array = [];
  let count = 1; //subArrays length
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      if (count > 1) {
        let subArr = new Array(count).fill(arr[i]);
        array.push(subArr);
        count = 1;
      }
    }
  }
  console.log(array);
};

repeatedGroups([1, 2, 2, 2, 4, 4, 5]);
repeatedGroups([1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9]);
