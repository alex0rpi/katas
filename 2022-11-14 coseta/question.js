const listOfStrings = ['alpha','beta','gamma','delta','epsilon','dseta','eta','perro'];
const maxSize = 14;
let newList = [];

// * For whole words combining.
let newList2 = [];
const combineWords = (list, max) => {
  let content = '';
  let newContent = '';
  for (let i = 0; i <= list.length - 1; i++) {
    if (list[i].length <= max) {
      newContent = content + list[i] + ' ';
      if (newContent.trim().length > max) {
        newList2.push(content.trim());
        newContent = '';
        content = '';
        i--;
      } else {
        if (i === list.length - 1) {
          newList2.push(newContent.trim());
        }
        content = newContent;
      }
    } else {
      return;
    }
  }
  return newList2;
};

console.log(combineWords(listOfStrings, maxSize));

// * For characters combining:
const combineStrings = (list, max) => {
  const combined = list.join(' ');
  const numberOfPositions = Math.ceil(combined.length / max);
  for (let i = 0; i <= numberOfPositions - 1; i++) {
    if (i === 0) {
      newList[i] = combined.slice(i, max).trim();
    }
    if (i === numberOfPositions) {
      newList[i] = combined.slice((i - 1) * max).trim();
    }
    newList[i] = combined.slice(i * max, i * max + max).trim();
  }
  return newList;
};

console.log(combineStrings(listOfStrings, maxSize));
