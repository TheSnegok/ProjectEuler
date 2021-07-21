"use strict";
let start = 100,
    end = 999,
    answer = 0,
    multiplicationAnswer = [],
    mas = [];

let isPolindrome = (num) => {
    let numArr = num.toString().split(''), // convert num to string and string to array  
        reverseNumArr = [], // variable for reverse arrat
        polyndrom = false;
    // create reverse array
    for(let f = numArr.length-1; f >= 0;--f) {
        reverseNumArr.push(numArr[f]);
    }
    // comparison each number 
    for(let i = 0; i < numArr.length; i++) {
        if(numArr[i] === reverseNumArr[i]) {
            polyndrom = true;
        } else {
            polyndrom = false;
            break;
        }
    }
    return polyndrom;
}

for(let p = start; p < end; p++) {
    multiplicationAnswer.push(p);
}

let t = 999;
while (t > 100) {
    for(let i =  multiplicationAnswer.length-1; i > 100; --i) {
        let multiplication = end * multiplicationAnswer[i];
        if(isPolindrome(multiplication) == true) {
            mas.push(multiplication);
        };
    }
    --end;
    --t;
}

mas.map(item => {
    for(let e = 0; e < mas.length; e++) {
        if(item > answer) {
            answer = item;
        }
    }
})

console.log(answer);
