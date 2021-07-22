"use strict";

let firstSum = 0, secondSum = 0, i = 1, f = 1, answer = 0;

while (i < 101) {
    firstSum = firstSum + (i**2);
    i++;
}

while (f < 101) {
    secondSum = secondSum + f;
    f++;
}
secondSum = secondSum ** 2;

answer = secondSum - firstSum;

console.log("Сумма квадратов: " + firstSum, "Квадрат сумы: " + secondSum, "Ответ: " + answer);