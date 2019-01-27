const randomWords = require(`random-words`);
const inquirer = require(`inquirer`);

const Word = require(`./app/Word`);

inquirer
	.prompt([
		{
			type: `list`,
			name: `wordLength`,
			message: `How long do you want the hidden word be?`,
			choices: [
				{ name: `I want it to have maximum 5 letters`, value: 5 },
				{ name: `I want it to have maximum 10 letters`, value: 10 },
				{ name: `I want it to have maximum 20 letters`, value: 20 }
			]
		}
	])
	.then(function(res) {
		let wordLength = res.wordLength;

		let chosenWord = randomWords({ exactly: 1, maxLength: wordLength })[0];

		let word = new Word(chosenWord);
		console.log(word);
		console.log(word.guessedWordState());

		// // If the user guesses the password...
		// if (user.myPassword === "myHouse") {
		//   console.log("==============================================");
		//   console.log("");
		//   console.log("Well a deal's a deal " + user.name);
		//   console.log("You can stay as long as you like.");
		//   console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
		//   console.log("");
		//   console.log("==============================================");
		// }
		// // If the user doesn't guess the password...
		// else {
		//   console.log("==============================================");
		//   console.log("");
		//   console.log("Sorry " + user.name);
		//   console.log("I'm calling the cops!");
		//   console.log("");
		//   console.log("==============================================");
		// }
	});

// console.log(randomWord);
