// Given a number, sum every second
// digit in that number

const number = 12;

const sumSecondDigits = (numeru) => {
  let sum = 0;
  if (('' + numeru).length < 2) {
    return sum;
  } else {
    for (let i = 1; i <= ('' + numeru).length - 1; i = i + 2) {
      sum += +('' + numeru)[i];
    }
  }
  return sum;
};

console.log(sumSecondDigits(number));
