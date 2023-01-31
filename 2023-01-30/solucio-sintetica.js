const generateArrays = (int) => {
  if (!int || typeof int !== 'number') {
    console.log('Please provide an integer :)');
    throw new Error('Please provide a positive integer');
  }
  let array = [];
  for (let i = 1; i <= int; i++) {
    array.push([i]);
    if (i >= 2) array[i - 1] = [...array[i - 2], i];
  }
  console.log(array);
};
generateArrays(5);