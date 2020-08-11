const vipPromise = Promise.resolve('vipPromise complete...');
const normalPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('normalPromise complete...')
    }, 2000);
})

// vipPromise.then(res => console.log(res));
// normalPromise.then(res => console.log(res));

Promise
    .all([vipPromise, normalPromise])
    .then(res => {
        console.log(res);
    })