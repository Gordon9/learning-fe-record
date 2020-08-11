function findLongestWordLength(str) {


    // Solution 2
    // let arr = str.split(' ');
    // let maxLength = 0;
    // for (let str of arr) {
    //     if (str.length > maxLength) {
    //         maxLength = str.length;
    //     }
    // }
    // console.log(maxLength);
    // return length;

    // Solution 1
    // let record = 0;
    // let i = 0;
    // let wordLength = 0;
    // while (true) {
    //     wordLength = str.indexOf(' ', i) - (i);
    //     if (str.indexOf(' ', i) === -1) {
    //         wordLength = str.length - i;
    //     }
    //     i = i + (wordLength > 0 ? wordLength : wordLength * (-1)) + 1;
    //     console.log(`i: ${i}`);
    //     // OR...
    //     // i += Math.abs(wordLength)+1;
    //     if (wordLength > record) {
    //         record = wordLength;
    //     }
    //     if (i > str.length) {
    //         break;
    //     }
    // }


    // Solution 3
    // let record = str.split(' ')
    //     .reduce((maxLength, val) => Math.max(maxLength, val.length), 0);

    // console.log(record);


    // Solution 4
    // console.log(Math.max(...str.split(' ').map(elem => elem.length)));

    // Solution 5
    str = str.split(' ');
    if (str.length === 1) {
        return str[0].length;
    }

    if (str[0].length >= str[1].length) {
        str.splice(1, 1);
        return findLongestWordLength(str.join(' '));
    }

    if (str[0].length <= str[1].length) {
        return findLongestWordLength(str.slice(1, str.length).join(' '));
    }


}

// findLongestWordLength("The quick bro32424324wn fox jumped over the lazy dog");
// findLongestWordLength('airbnb')
console.log(findLongestWordLength('airbnb facebook'));