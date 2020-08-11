// function titleCase(str) {

//     return str.split(' ')
//         .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase()).join(' ');

// }

// titleCase("I'm a little tea pot")

// Solution 1
String.prototype.replaceAt = function(index, character) {
    console.log(this.substr(0, index) + character + this.substr(index + character.length));
    return (
        this.substr(0, index) + character + this.substr(index + character.length)
    );
};

// let str = 'airBNB';
// let result = str.replaceAt(0, 'a');
// console.log(result);



function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st]
            .toLowerCase()
            .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
}

titleCase("I'm a little tea pot");