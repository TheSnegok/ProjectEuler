"use strict";

let Log = (output) => console.log(output);

<<<<<<< HEAD
function priNumber(num) {
	for (let i = 1; i <= num; i++) {
		switch (i) {
            case 1:
                Log("Число не является простым! " + i);
                break;
			case 2:
				Log("Это простое число! " + i);
				break;
			case 3:
				Log("Это простое число! " + i);
				break;
			case 5:
				Log("Это простое число! " + i);
				break;
			case 7:
				Log("Это простое число! " + i);
				break;
			default:
				i % 2 == 0 || i % 3 == 0 || i % 5 == 0 || i % 7 == 0
					? Log("Число не является простым! " + i)
					: Log("Это простое число! " + i);
				break;
		}
	}
}

priNumber(50);
