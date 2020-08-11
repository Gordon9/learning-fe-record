// Object Literals

const person = {
    "firstName": "Gordon-1",
    "lastName": "tam",
    "age": 25,
    "likes": ["code", "piano"],
    "address": {
        "street": '123 Street',
        "city": 'Guangzhou',
        "state": 'Guangdong'
    }
}

// let fName = person.firstName;
// let lName = person.lastName;

// console.log(fName, lName);

const { firstName, lastName } = person;

console.log(firstName, lastName);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

[a, b] = [100, 200];
console.log(a);
console.log(b);

let x = [1, 2, 3, 4, 5];
let [y, z] = x;
console.log(y);
console.log(z);

let white;
let black;

[white, black] = ["#000", "#fff"];
console.log(white);
console.log(black);

let fav1;
let fav2;
[fav1 = "piano", fav2 = "guitar"] = ["music"];
console.log(fav1);
console.log(fav2);

const arr = [1, 2, 3];
[arr[1]] = [arr[2]];
console.log(arr);

function f() {
    return [1, 2, 3];
}

const [a1, , b1] = f();
console.log(a1);
console.log(b1);

const o = { p: 99, g: 49 };
const { p: piano, g: guitar } = o;
console.log(piano);
console.log(guitar);

const user = {
    id: 42,
    displayName: "Gdon",
    fullName: {
        firstName: "Gordon",
        lastName: "Tam"
    }
}

function userId({ id }) {
    return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

console.log(`id: ${user.id}`);
console.log(`id: ${userId(user)}`);
console.log(whois(user));

console.log(`fullName: ${user.fullName.firstName} ${user.fullName.lastName}`);
// console.log(`${user.fullName}`);
// console.log(`${user[displayName]}`);

function drawChart({ size = 'big', coords = { x: 0, y: z }, radius = 25 } = {}) {
    console.log(size, coords, radius);
}

drawChart();
drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
})

const metadata = {
    title: 'Scratchpad',
    translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2020-07-19T08:34:33',
        url: '/de/docs/Tools/ScScratchpad',
        title: 'JavaScript-Umgebung'
    }],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [{
        title: localeTitle, // rename
    }, ],
} = metadata;

console.log(englishTitle);
console.log(localeTitle);

const city = ['GZ', 'BJ', 'SH', 'SZ'];

for (const i of city) {
    console.log(i);
}

const cityPlus = [{
        name: 'GuangZhou',
        plus: {
            birth: 'birth-surprise',
            vip: 'vip-service',
            integral: 'integral-double'
        },
        homePlus: 'live there'
    },
    {
        name: 'BeiJing',
        plus: {
            birth: 'birth-surprise2',
            vip: 'vip-service2',
            integral: 'integral-double2'
        },
        homePlus: 'live there2'
    }
]

const cPlusJSON = JSON.stringify(cityPlus);
console.log(cPlusJSON);

for (const { name: n, plus: { integral: i } }
    of cityPlus) {
    console.log(`name: ${n}, integral: ${i}`);
}

let key = 'z';
let {
    [key]: foo
} = { z: 'bar' };

console.log(foo);

const prop = [{
        id: 1,
        name: 'HTML'
    },
    {
        id: 2,
        name: 'CSS'
    },
    {
        id: 3,
        name: 'JavaScript'
    }
];

const [, , { id, name }] = prop;

console.log(`id: ${id}, name: ${name}`);

let obj = { self: '123' };
obj.__proto__.prot = '456';
const { self, prot } = obj;

console.log(self, prot);

console.log(`======= filter begin ========`);

const cityList = ['Guangzhou', 'Chongqing', 'Chengdu', 'Shenzhen', 'Shanghai', 'Xiamen'];

const fewWalk = cityList.filter(item => item.length > 8);

console.log(fewWalk);

let nunberArr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: 'undefined' }
]

let invalidEntries = 0;

function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    return false;
}

let arrByID = nunberArr.filter(filterByID);

console.log(`${arrByID}`);
console.log(arrByID);
console.log('Number of Invalid Entries = ', invalidEntries);

let temp = 10;
console.log(temp);
console.log(`${temp}`);

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/* Filter array items based on search criteria (query) */
// function filterItems(arr, query) {
//     return arr.filter(function(el) {
//         return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//     })
// }

function filterItems(arr, query) {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

console.log(filterItems(fruits, 'ap'));
console.log(filterItems(fruits, 'an'));

// Modifying each words
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += ' extra'
    return word.length < 6
});

console.log(modifiedWords);

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const appendedWords = words.filter((word, index, arr) => {
    arr.push('new');
    return word.length < 6;
})

console.log(appendedWords);

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

const deleteWords = words.filter((word, index, arr) => {
    arr.pop();
    return word.length < 6;
})

console.log(deleteWords);

let list = document.getElementById('list');
console.log(list);

// Multiple
const listItems = document.querySelectorAll('.list-item');
console.log(listItems);
listItems.forEach(item => {
    console.log(item.textContent);
})

// list.firstElementChild.remove();
list.firstElementChild.textContent = "New item";
list.firstElementChild