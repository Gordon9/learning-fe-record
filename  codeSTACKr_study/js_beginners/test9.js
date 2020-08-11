let arr = [1, 3, 5, 8, 9, 10];
// let arr = [1, 3, 5, 9];

// let func = arr => {
//     return arr.map(num => num % 2 === 0);
// }

// let trueIndex = func(arr).indexOf(true);
// console.log(func(arr));
// console.log(trueIndex);
// console.log(arr[trueIndex]);


function findElement(arr, func) {

    let newArr = arr.map(func)

    let trueIndex = newArr.indexOf(true);

    // return ((trueIndex === -1) ? false : true);
    console.log((trueIndex === -1) ? undefined : arr[trueIndex]);

    // if (trueIndex === -1) {
    //     return false;
    // } else {
    //     return true;
    // }

    // (trueIndex === -1) ? console.log('undefined'): console.log('got you');

}

findElement(arr, num => num % 2 === 0);