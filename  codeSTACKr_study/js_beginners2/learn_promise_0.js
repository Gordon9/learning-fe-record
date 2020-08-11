// let classicCity = [];
// let classicCity = ['Hongkong', 'London', 'Seattle', 'Guangzhou']
// let classicCity = 2;

let cityOfAll = ['Hongkong', 'London', 'Seattle',
    'Guangzhou', 'Beijing', 'Shenzhen',
    'Shanghai', 'Hangzhou', 'Xian',
    'Nanjin', 'Qingmai'
];


let isNewWeek = true;

let getClassicCity = () => {
    return ['Hongkong', 'London', 'Seattle', 'Guangzhou'];
}

const voteClassicCity = new Promise((resolve, reject) => {
    if (!isNewWeek) {
        resolve(getClassicCity());
    } else if (isNewWeek) {
        let count = 0;
        let newClassicCity = [];
        let random = 0;
        let localCity = cityOfAll;

        while (count < 4) {
            random = Math.floor(Math.random(0, 1) * localCity.length);
            newClassicCity.push(localCity.splice(random, 1));
            count++;
        }

        resolve(newClassicCity);
        isNewWeek = false;
    }
});

voteClassicCity
    .then(res => {
        console.log('ClassicCity: ');
        console.log(res);
    })
    .catch(err => {
        console.log(err.message);
    });