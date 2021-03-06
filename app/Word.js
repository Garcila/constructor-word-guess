const Letter = require(`./Letter.js`);

class Word {
	constructor(word) {
		this.word = word;
		this.wordArray = this.letterArray();
	}

	letterArray() {
		let wordToArray = this.word.split('');

		// TODO: make reduce work here
		// let arrayOfLetterObjects = wordToArray.reduce((total, item) =>
		//   total.push(new Letter(item.character))
		//   , []
		// );

		let arr = [];
		wordToArray.map((l) => {
			let letter = l.character;
			letter = new Letter(l);
			arr.push(letter);
		});
		// console.log(arr)
		return arr;
	}

	guessedWordState() {
		let showUser = this.wordArray.reduce((total, value) => total + value.letterOrLine(), '');
		return showUser;
		// console.log('from show user inside word.js',showUser);
	}

	checkLetterGuess(character) {
		Letter.checkGuess(character);
	}
}

// let a = new Word('cat');

// a.guessedWordState();

module.exports = Word;

// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word

// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
