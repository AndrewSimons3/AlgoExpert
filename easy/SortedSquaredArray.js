
console.log('hello')
	// const arr = [1,2,3,4,5,6,7,8,9]

	// // //Solution 1
	// // function sortedSquaredArray(array) {
	// // 	// Write your code here.
	// // 	return array
	// // 		.map((num) => num ** 2)
	// // 		.sort((a, b) => {
	// // 			return a - b;
	// // 		});
	// // }

	// function sortedSquaredArray(array) {

	// }

	// sortedSquaredArray(arr);

	// const mystery = new Array(3)
	// 	.fill(2)
	// 	.map((x, y) => x + y)
	// 	.filter((x) => x % 2 === 0);

	// console.log(mystery);

	// const arr = [2, 3, 4];
	// const [mysteryOne, ...rest] = arr;
	// const mysteryTwo = [...rest, ...arr, mysteryOne];

	// console.log(mysteryTwo)

	// function mystery() {
	// 	let num = 0;
	// 	return { getNum: () => num, increment: () => num++ };
	// }
	// const { getNum, increment } = mystery();
	// const { getNum: getNum2, increment: increment2 } = mystery();
	// increment();
	// increment();
	// increment2();
	// console.log(getNum(), getNum2());

	// const mystery = {
	// 	num: 6,
	// 	x: {
	// 		z: 1,
	// 	},
	// };
	// console.log(mystery.num > 5 ? mystery?.x?.y ?? 2 : mystery.x.y);

	// async function mystery() {
	// 	return 2;
	// }
	// console.log(mystery());

// 	function (num) {
// 		(function (num) {
// 			console.log(num * 2);
// 		})(5);
// 	}
// )(10);


const obj = {
  website: 'AlgoExpert',
  logWebsite: () => console.log(this.website)
};
obj.logWebsite();