function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes

    let rowArr = [];
    let columnArr = [];

    for (let row = 0; row < m; row++) {
        // columnArr = [];
        for (let column = 0; column < n; column++) {
            columnArr.push(0);
        }
        rowArr.push(columnArr);
    }
    // return rowArr;
}

let matrix = zeroArray(2, 1);
console.log(matrix);