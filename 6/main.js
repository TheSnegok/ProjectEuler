"use strict";

let firstSum = 0, secondSum = 0, i = 1;

while (i < 101) {
    firstSum = firstSum + (i**2);
    secondSum = secondSum + i;
    i++;
}
secondSum = secondSum ** 2

console.log("Сумма квадратов: " + firstSum, "Квадрат сумы: " + secondSum, "Ответ: " + (secondSum - firstSum));