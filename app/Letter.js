class Letter {
  constructor(character){
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
    if(guess === this.character){
      this.guessed = true;
    }
  }
};
// TODO: get rid of test
// let a = new Letter('b').letterOrLine();
// let a = new Letter('b')
// console.log(a);
// console.log(a.checkGuess('u'))
// console.log(a);
module.exports = Letter;

