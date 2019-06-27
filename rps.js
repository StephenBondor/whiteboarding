function rockPaperScissors(num) {
	let arr = [];

	function helper(arr, num) {
		// console.log("interation: ", num, " array: ", arr)
		if (num == 0) {
			return [arr];
		}
		return [
			...helper([...arr, 'rock'], num - 1),
			...helper([...arr, 'paper'], num - 1),
			...helper([...arr, 'scissors'], num - 1)
		];
	}
	if (num == 0) {
		return [[]];
	}
	return helper([], num);
}

/* Some console.log tests */
const rv0 = rockPaperScissors(0);
console.log(rv0);

const rv1 = rockPaperScissors(1);
console.log(rv1);

const rv22 = rockPaperScissors(2);
console.log(rv22); // should print [[rock, rock], [rock, paper], [rock, scissors], [paper, rock], [paper, paper], [paper, scissors], [scissors, rock], [scissors, paper], [scissors, scissors]]

const rv2 = rockPaperScissors(3);
console.log(rv2); // should print 27

const rv3 = rockPaperScissors(4);
console.log(rv3.length); // should print 81

const rv4 = rockPaperScissors(5);
console.log(rv4.length); // should print 243
