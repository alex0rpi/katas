const generateArrays = (int) => {
  if (!int || typeof int !== 'number') {
    console.log('Please provide an integer number :)');
    throw new Error('Please provide a positive integer number');
  }
  let result = [];
  for (let i = 1; i <= int; i++) {
    result.push([i]);
    for (j = 0; j <= result.length - 1; j++) {
        
    }
  }
  console.log(result);
  return result;
};

generateArrays(6);
