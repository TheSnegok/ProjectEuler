"use strict";

let Log = (output) => console.log(output);

let sum = 0;

for(let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        sum = sum + i;
    }
}
Log(sum);


