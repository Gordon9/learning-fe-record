function confirmEnding(str, target) {

    // let targetLength = target.length;
    // let strLength = str.length;

    // console.log('hello');
    // console.log(targetLength);
    // console.log(strLength);

    // for (let i = strLength - targetLength; i > targetLength; i++) {
    //     console.log('e');
    //     console.log(i);
    // }


    let subString = str.slice(str.length - target.length);
    console.log(subString);
    console.log(target);
    if (subString == target) {
        console.log('1');
        return true;
    }
    console.log('0');
    return false;
}

confirmEnding("airbnb", "aaaaairbnb");