// function chunkArrayInGroups(arr, size) {

//     let newArr = [];
//     let localArr = [];
//     let startIndex = 0;

//     while (arr.length >= 1) {
//         localArr = arr.splice(startIndex, size);
//         newArr.push(localArr);
//     }

//     console.log(newArr);
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 4);

// Solution 1
// function chunkArrayInGroups(arr, size) {
//     var temp = [];
//     var result = [];

//     for (var a = 0; a < arr.length; a++) {
//         if (a % size !== size - 1) temp.push(arr[a]);
//         else {
//             temp.push(arr[a]);
//             result.push(temp);
//             temp = [];
//         }
//     }

//     if (temp.length !== 0) result.push(temp);
//     // return result;
//     console.log(result);
// }


// Solution 2


chunkArrayInGroups(["a", "b", "c", "d"], 3);