const phoneDigitsToLetters = {
	0: '0',
	1: '1',
	2: 'ABC',
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ'
};

function telephoneWords(str) {
	// given a string of digits, generate all possible letter
	// combinations of those digits
	const words = [];

	//
	const recurseHelper = (currentWord, index) => {
		// base case
		// when do we know we've completed a word?
		// check that the length of the current word we're working on
		// matches the length of the input string
		// push the current word to the words array
		// return out of this recursive call
		if (currentWord.length === str.length) {
			words.push(currentWord);
			return;
		}

		// not the base case
		// 1. at this point, our current word is shorter than the
		// input string of digits
		// 2. the current word we're working on gets longer when we
		// concat another character onto the end
		// 3. how do we know what characters we can concat onto
		// the end of the current word we're working on?
		// 4. access the phoneDigitsToLetters hash table using the
		// current digit we're recursing on
		// 5. that tells us, which letters we're allowed to concat
		// onto the end of the current word
		// 6. how do we know which digit to access?
		// 7. need an index to select the char in the hash table to concat
		// 8. where does the index come from? have the index be one of the parameters
		// 9. what else might we want as a parameter
		const possibleLetters = phoneDigitsToLetters[str[index]];
		// loop through each of the possible letters, concat the letter onto the end of the
		// current word, then kick off another recursive call
		for (let i = 0; i < possibleLetters.length; i++) {
			recurseHelper(currentWord + possibleLetters[i], index + 1);
		}
	};

	recurseHelper('', 0);

	return words;
}
