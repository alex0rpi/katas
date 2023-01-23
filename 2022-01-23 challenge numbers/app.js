/* 
Find missing bits, insert dots where more than 1 number is missing
If only one number is missing, insert it
*/

const missingBits = (bits) => {
  let output = [];
  for (let i in bits) {
    if (bits[i] - bits[i - 1] > 2) {
      output.push('...');
      output.push(bits[i]);
    } else if (bits[i] - bits[i - 1] === 2) {
      output.push(bits[i] - 1);
      output.push(bits[i]);
    } else {
      output.push(bits[i]);
    }
  }
  console.log(output);
  return output;
};

missingBits([0, 2, 3, 4, 19, 21, 22, 44]);

// let array = [2,3,20,27,29]

// console.log(array[0] - array[-1])
