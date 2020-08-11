function truncateString(str, num) {

    let newStr = '';
    let newArr = [];

    if (str.length <= num) {
        return str;
    }

    newArr = str.split('').slice(0, num);
    newArr.push('...');
    newStr = newArr.join('');
    console.log(newStr);
    // console.log(str.split('').slice(0, num));


    // console.log(str
    //         .split('')
    //         .slice(0, num)
    //         .push('...')
    //         .join('')
    //     )
    // for (let i = 0; i < num; i++) {
    //     newStr += str[i];
    // }
    // newStr += '...';
    // console.log(newStr);
    // return newStr;




}

truncateString("A-tisket a-tasket A green and yellow basket", 10);