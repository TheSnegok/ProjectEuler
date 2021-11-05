"use strict";

let arr = [];

let Log = (output) => console.log(output);

function priNumber (num) {
    for(let i = 1; i <= num; i++) {
        (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) ? Log('Это простое число! ' + i) : Log('Число не является простым! ' + i);
    }
}

priNumber(20);
