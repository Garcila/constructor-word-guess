class Letter {
	constructor(character) {
		this.character = character;
		this.guessed = false;
	}

	letterOrLine() {
		let displayToUser = this.guessed ? this.character : `_ `;
		// TODO: get rid of console log
		// console.log(displayToUser)
		return displayToUser;
	}

	checkGuess(guess) {
		this.guessed = guess === this.character ? true : false;
	}
}
// TODO: get rid of test
// let a = new Letter('b').letterOrLine();
module.exports = Letter;
