"use strict";
// i its a numbers from 1 to 20, x its numbers from 21 to number who we need, isNumber its array status with all true or false
let i = 1, x = 21,
    isNumber = false, 
    arr = [];
// create a cycle which update array, in this cycle i create new cycle for brute force number from 1 to 20, division and comparison with 0 and push in massive
while(!isNumber) {
    arr = [];
    i = 1
    while(i < 21) {
        // if you want look on data, uncomment the line below
        // console.log("x: " + x, "i: " + i);
        if(x % i === 0) {
            arr.push(true);
        } else {
            arr.push(false);
        }
        i++;
    }
    // if you want look on data, uncomment the line below
    // console.log("mas: " + mas);
    arr.every((value) => ((value ? true : false) == true ? isNumber = true : isNumber = false)); // this line comparison all value from array and if finds once false then is isNumber = false
    if(isNumber) {
        console.log("answer: " + x);
        break;
    }
    x++;
}
