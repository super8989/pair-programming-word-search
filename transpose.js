// transpose the element by swapping the horizontal with the vertical
const transpose = (array) => {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			let temp = array[i][j]; //1,0 S

			array[i][j] = array[j][i]; //1,0 S = 0,1 W
			array[j][i] = temp; // 0,1 W = S
		}
	}
	return array;
};

module.exports = transpose;

// console.log(
// 	transpose([
// 		['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
// 		['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
// 		['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
// 		['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
// 		['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
// 		['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
// 		['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
// 		['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// 	])
// );

//
// [
// 	['A', 'S', 'Y', 'H', 'W', 'B', 'U', 'O', 'E'],
// 	['W', 'E', 'F', 'M', 'H', 'F', 'B', 'D', 'Z'],
// 	['C', 'I', 'C', 'J', 'C', 'R', 'T', 'C', 'K'],
// 	['F', 'N', 'F', 'T', 'S', 'E', 'W', 'A', 'F'],
// 	['Q', 'F', 'Q', 'E', 'Y', 'N', 'A', 'K', 'Q'],
// 	['U', 'E', 'U', 'V', 'E', 'E', 'P', 'U', 'U'],
// 	['A', 'L', 'A', 'R', 'R', 'Y', 'A', 'A', 'A'],
// 	['L', 'D', 'L', 'G', 'L', 'B', 'I', 'S', 'L'],
// ];
