function repeatStrNumTimes(str, num) {
    let strArr = [];
    for (let i = 0; i < num; i++) {
        strArr.push(str);
    }
    console.log(strArr.join(''));
}

repeatStrNumTimes('*', 3);