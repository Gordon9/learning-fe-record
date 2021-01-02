const q1_array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const q1_arrayStr = [1, "2", "3", 2];

function cleanArr(array) {
  let sortedArray = array.slice().sort((a, b) => a - b);

  return sortedArray;
}

console.log(" array with numbers =>", cleanArr(q1_arrayStr));
