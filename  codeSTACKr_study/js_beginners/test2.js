// let arr = [2, 0, 3, 4, 3, 3, 3, 3, 8];
let arr = [
    [2, 3, 2],
    [1, 1, 3],
    [2, 4, 4],
    [2, 3, 3, 3, 3, 5],
    [23, 4234, 423]
];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] === 4) {
//             arr.splice(i, 1)
//         }
//     }
// }

// console.log(arr);

function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 4) {
                arr.splice(i, 1)
            }
        }
    }
    newArr = arr
        // Only change code above this line
    return newArr;
}

console.log(filteredArray(
    [
        [2, 3, 2],
        [1, 1, 3],
        [2, 4, 4],
        [2, 3, 3, 3, 3, 5],
        [23, 4234, 423]
    ], 4
));