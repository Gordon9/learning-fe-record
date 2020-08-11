function frankenSplice(arr1, arr2, n) {

    let fArr = arr1.slice(0);
    let sArr = arr2.slice(0);

    for (let i = 0; i < fArr.length; i++) {
        sArr.splice(n, 0, fArr[i]);
        n++;
        console.log(sArr);
    }

    return sArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);