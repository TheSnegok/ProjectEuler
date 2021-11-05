"use strict";

let sum = 0;

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

for(let i = 1; fib(i) <= 4000000; i++) {
    if(fib(i) % 2 == 0){
        sum = sum + fib(i);
    }
}

console.log(sum + '- ответ');

