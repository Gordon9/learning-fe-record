import { add } from './mathematical.js';
import subtract from './mathematical.js';


class Book {
    constructor(author) {
        this._author = author;
    }

    // getter
    get writter() {
        return this._author;
    }

    // setter
    set writter(updateAuthor) {
        this._author = updateAuthor;
    }
}

const lol = new Book('anonymous');
console.log(lol.writter);
lol.writter = 'Gordon';
console.log(lol.writter);
console.log(lol._author);

class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return 5 / 9 * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32
    }
}

const thermos = new Thermostat(72);
let temp = thermos.fahrenheit;
console.log(temp);
console.log(thermos.temperature);
thermos.temperature = 26;
console.log(thermos.temperature);

console.log(`add: ${add(2, 5)}`);
console.log(`subtract: ${subtract(10, 1)}`);