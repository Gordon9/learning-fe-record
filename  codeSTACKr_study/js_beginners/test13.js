// function getIndexToIns(arr, num) {

//     // if (arr.length === 0) {
//     //     return 0;
//     // }

//     // let sortArr = arr.sort((a, b) => a - b);
//     // console.log(sortArr);

//     // for (let i = 0; i < arr.length; i++) {
//     //     if (num <= arr[i]) {
//     //         return i;
//     //     }
//     // }

//     // // arr.map(item => {
//     // //     if (num <= item) {
//     // //         return 
//     // //     }
//     // // })

//     // console.log(arr.length);
//     // return arr.length;

//     arr.sort(function(a, b) {
//         return a - b;
//     });

//     for (var a = 0; a < arr.length; a++) {
//         if (arr[a] >= num) return a;
//     }

//     return arr.length;

// }

// // getIndexToIns([5, 3, 20, 3], 4);
// getIndexToIns([1, 2, 3, 4], 10);
// // getIndexToIns([], 4);
// // getIndexToIns([10, 20, 30, 40, 50], 30)

// Solution 2
// function getIndexToIns(arr, num) {

//     let times = arr.length;
//     let count = 0;
//     for (let i = 0; i < times; i++) {
//         if (num > arr[i]) count++;
//     }

//     console.log(count);
// }

// Solution 3
// function getIndexToIns(arr, num) {

//     arr.push(num);

//     arr.sort((a, b) => a - b);

//     console.log(arr.indexOf(num));

// }

// Solution 4
// function getIndexToIns(arr, num) {

//     let index = arr.
//     sort((curr, next) => curr - next)
//         .findIndex(currNum => num < currNum);

//     console.log(index === -1 ? arr.length : index);

// }

// Solution 5
function getIndexToIns(arr, num) {
    return arr
        .concat(num)
        .sort((a, b) => a > b)
        .indexOf(num);
}


// getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 4);