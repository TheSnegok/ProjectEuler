"use strict";

const findNumbers = () => {
	let answer,
		c = 334;
	end: while (c < 999) {
		let a = Math.round((1000 - c) / 2 - 1),
			b = Math.round((1000 - c) / 2);
            // console.log("create variable", a,b,c);
		while (a > 0 && b < c) {
			if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
				answer = a * b * c;
                console.log(a, ":a", b, ":b", c, ":c", answer, ":answer");
				break end;
			}
            // console.log("second while",a,b);
			a--;
			b++;
		}
		c++;
	}
};

findNumbers();
