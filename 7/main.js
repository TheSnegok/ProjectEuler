"use strict";

let answer = 0, arr = [];

nextI:for(let j = 2; arr.length < 10001;j++) {
    for(let i = 2; i < j; i++) {
        if(j % i == 0) continue nextI;
    }
    arr.push(j);
}

console.log("Answer: " + arr[arr.length-1]);

