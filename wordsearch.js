const transpose = require('./transpose');

// join the letters of horizontal array
const horizontalJoin = (letters) => {
	return letters.map((ls) => ls.join(''));
};

// check array to see if it includes the word
const checkWord = (joinedArray, word) => {
	for (let l of joinedArray) {
		if (l.includes(word)) return true;
	}
};

// search the word in an array both horizontally and vertically
const wordSearch = (letters, word) => {
	const horizontalJoinArray = horizontalJoin(letters);
	const verticalJoinArray = horizontalJoin(transpose(letters));

	if (
		checkWord(horizontalJoinArray, word) ||
		checkWord(verticalJoinArray, word)
	) {
		return true;
	} else {
		return false;
	}
};

module.exports = wordSearch;
