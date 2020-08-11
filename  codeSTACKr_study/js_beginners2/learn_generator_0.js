// function* generator(i) {
//     yield i;
//     yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// // expected output: 20

// function* idMaker() {
//     let index = 0;
//     while (index < 3) {
//         yield index++;
//     }
// }

// var gen = idMaker();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* anotherGenerator(i) {
//     yield i + 2;
//     yield i + 3;
//     yield i + 4;
// }

// function* generator(i) {
//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 20;
// }

// let gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// function* logGenerator() {
//     console.log(0);
//     console.log(1, yield);
//     console.log(10, yield);
//     console.log(1024, yield);
// }

// let gen = logGenerator();

// console.log(gen.next());
// console.log(gen.next('airbnb'));
// console.log(gen.next('google'));
// console.log(gen.next('facebook'));

// class Foo { *
//     generator() {
//         yield 1;
//         yield 2;
//         yield 3;
//     }
// }

// const f = new Foo();
// const gen = f.generator();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function* powers(n) {
    //endless loop to generate
    console.log('hello1');
    for (let current = n;; current *= n) {
        console.log('hello2');
        yield current;
    }
}

for (let power of powers(2)) {
    //controlling generator
    console.log('hello');
    if (power > 2) break;
    console.log(power)
        //2
        //4
        //8
        //16
        //32
}