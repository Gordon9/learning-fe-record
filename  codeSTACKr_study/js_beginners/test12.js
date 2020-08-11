function bouncer(arr) {

    let localArr = [];

    arr.map(item => {
        if (Boolean(item)) {
            localArr.push(item);
        }
    });

    console.log(localArr);
}

bouncer([7, "ate", "", false, 9]);