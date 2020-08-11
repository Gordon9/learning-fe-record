let outV = 0;
let intV = 0;

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        intV++;
    }
    outV += intV;
}

console.log(intV);
console.log(outV);