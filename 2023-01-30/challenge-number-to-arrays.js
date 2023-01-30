const generateArrays = (int) => {
  if (!int || typeof int !== 'number') {
    console.log('Please provide an integer :)');
    throw new Error('Please provide a positive integer');
  }
  let array = [];
  for (let i = 1; i <= int; i++) {
    array.push([i]);
  }
  const result = array.map(item => {
    for (j = item[0]; j > 1; j--) {
      item.unshift(j-1);
    }
    return item;
  });
  console.log(result);
};

generateArrays(5);
