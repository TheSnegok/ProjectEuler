"use strict";

const sumNumbers = (maxNumber) => {
    let answer = 0, i = 2;
    next:for(i;i < maxNumber;i++) {
        for(let j = 2; j < i; j++) {
            if(i % j == 0) continue next;
        }
        answer = answer + i;
    }
    return console.log(answer);
}

sumNumbers(2000000);// 2000000 = 142913828922