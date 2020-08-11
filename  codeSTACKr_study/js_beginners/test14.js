function mutation(arr) {

    let fArr = convert(arr[0]);
    let sArr = convert(arr[1]);

    function convert(str) {
        return str
            .toLowerCase()
            .split('');
    }

    console.log(fArr);
    console.log(sArr);

    let result = sArr.every(s =>
        fArr.indexOf(s) !== -1
    );

    console.log(result);

    return result;
}

mutation(["heawegwegidgewrbsgsgnbdgfgbllo", "heHHHHHHHHHlllllooairbnb"]);