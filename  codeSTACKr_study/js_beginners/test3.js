function countOnline(usersObj) {
    // Only change code below this line
    let count = 0;
    for (let user in usersObj) {
        console.log(user);
        if (usersObj[user].online === true) {
            count++;
        }
    }
    console.log(count);
    // Only change code above this line
}

let testObj = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

countOnline(testObj)