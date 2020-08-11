// function largestOfFour(arr) {
//     let newArr = [];
//     let maxNum;
//     for (let i = 0; i < arr.length; i++) {
//         let subArr = arr[i];
//         console.log(subArr);
//         let MaxNum = Math.max(...subArr);
//         console.log(maxNum);
//         newArr.push(maxNum);
//     }
//     // return arr;
//     console.log(newArr);
// }

// largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [-1000, -2, -857, -1]
// ]);

let arr = [
    [-3, -5, -6, -2],
    [2, 3, 5, 6]
];
// let subArr = arr[1];
// console.log(subArr);
// let max = Math.max(...subArr);
// console.log(max);

// function largest(arr) {
//     // let newArr = [];
//     // let subArr = [];
//     // let maxNum = 0;
//     // for (let i = 0; i < arr.length; i++) {
//     //     subArr = arr[i];
//     //     maxNum = Math.max(...subArr);
//     //     console.log(maxNum);
//     //     console.log(subArr);
//     //     newArr.push(maxNum);
//     // }
//     // console.log(newArr);

//     // Solution 2
//     // return arr.map(function(group) {
//     //     return group.reduce(function(prev, current) {
//     //         return current > prev ? current : prev;
//     //     });
//     // });

//     return arr.map(group => group.reduce(
//         (prev, current) => prev > current ? prev : current
//     ))

// }

function largestOfFour(arr, finalArr = []) {
    return !arr.length ?
        finalArr :
        largestOfFour(arr.slice(1), finalArr.concat(Math.max(...arr[0])))
}

console.log(largestOfFour(arr));