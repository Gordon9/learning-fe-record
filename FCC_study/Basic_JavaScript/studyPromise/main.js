let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error('OMG')), 1000);
})

promise.then(
    result => console.log(result),
    error => console.log(error)
);

new Promise((resolve, reject) => {
        setTimeout(() => resolve('result'), 2000);
    })
    .finally(() => console.log("Promise-ready"))
    .then((result) => console.log(result));

function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => resolve(script);
        script.error = () => reject(new Error(`Script load error for ${script}`));

        document.head.append(script);
    });
}

let promiseScript = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

promiseScript.then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: {error.message}`)
);

promiseScript.then(script => console.log('Another handler'));