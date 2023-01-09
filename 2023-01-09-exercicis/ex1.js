const capitalAfterVowel = 'hello woooorld';

const vowels = ['a', 'e', 'i', 'o', 'u'];
// Without Regex
const toUpperNoRegex = (string, vocals) => {
  let newString = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (vocals.includes(string[i].toLowerCase())) {
      if (!vocals.includes(string[i + 1].toLowerCase())) {
        newString += string[i] + string[i + 1].toUpperCase();
        i++;
      }
    } else {
      newString += string[i];
    }
  }

  return newString;
};

console.log(toUpperNoRegex(capitalAfterVowel, vowels));
// !OJO! caso de varias vocals seguides!!

// With Regex
const toUpperWithRegex = (string) => {
  let testRegex = /[aeiou]/i;
  let newString = '';
  //   let result = string.match(testRegex);
  for (let i; i <= string.length - 1; i++) {
    let isVowel = testRegex.test(string[i]);
    if (isVowel) {
      newString += string[i] + string[i + 1].toUpperCase();
      i++;
    } else {
      newString += string[i];
    }
    console.log(newString);
  }
  return newString;
};

console.log(toUpperWithRegex(capitalAfterVowel));
