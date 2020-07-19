const m = 20;
const n = 30;
let a = 20;
let result = 1;

do {
    if (a % 2 === 1) {
        result *= a;
    }
    a++;
} while (a <= n);
console.log('Result: ' + result);