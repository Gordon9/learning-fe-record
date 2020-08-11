function resolveAfter2Seconds() {
    console.log('===starting slow promise===')
    return new Promise((res) => {
        setTimeout(() => {
            console.log('===slow promise done===')
            res('slow')
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log('===starting fast promise===');
    return new Promise((res) => {
        setTimeout(() => {
            console.log('===fast promise done===');
            res('fast')
        })
    })
}

// async function sequentialStart() {
//     console.log('===SEQUENTIAL START===');

//     const slow = await resolveAfter2Seconds()
//     console.log(slow);

//     const fast = await resolveAfter1Second()
//     console.log(fast);
// }

async function concurrentStart() {
    console.log('===CONCURRENT START with await===');

    const slow = resolveAfter2Seconds()
    const fast = resolveAfter1Second()

    console.log(await slow);
    console.log(await fast);
}

// function concurrentPromise() {
//     console.log('===CONCURRENT START with Promise.all===');
//     return Promise
//         .all([resolveAfter2Seconds(), resolveAfter1Second()])
//         .then((message => {
//             console.log(message[0]); // slow
//             console.log(message[1]); // fast
//         }))
// }


// async function parallel() {
//     console.log('===PARALLEL with await Promise.all===');

//     return Promise
//         .all([
//             (async() => console.log(await resolveAfter2Seconds()))(),
//             (async() => console.log(await resolveAfter1Second()))()
//         ])
// }

concurrentStart()
    // sequentialStart()
    // setTimeout(concurrentPromise, 2000);
    // parallel();

// let allPromise = Promise.all([resolveAfter2Seconds(), resolveAfter1Seconds()])

// allPromise
//     .then((message) => {
//         console.log(message);
//         console.log(message[0]);
//         console.log(message[1]);
//     })
//     .catch()

// let slowPromise = resolveAfter2Seconds()
// let fastPromise = resolveAfter1Seconds()

// slowPromise
//     .then((res) => {
//         console.log(res);
//     })
//     .catch()