# ToDos

- [x] install npm packages
  - [x] random-words
  - [x] inquirer
- [x] require packages in your index.js file
- [x] Letter.js
  - [x] create Letter class
  - [x] create constructor
  - [x] set a character
  - [x] set character to character
  - [x] set guessed to false
  - [x] create Letter or line function
  - [x] create checkGuess function
- [x] Word.js
- [] Index.js
  - [x] require Word Constructor
  - [x] prompts the user for Word Length
    - [x] 3 to 5 letters
    - [x] 6 to 9 letters
    - [x] 10 to 20 letters
    [x] selects a random word using random-words
  - [x] stores it in constructor Word
  - [] if there are chances and word has not been found
    - [] show 
      - [] '? Guess a letter' ${letter chosen}
        - [] capture user input
        - [] store it in a variable userInput
      - [] lines to be filled with letters
      - [] 'CORRECT' or 'INCORRECT'
      - [] number of chances remaining
        - [] keep count of remaining chances
        - [] create a variable to store max number of chances (I choose it to be 7. head-body-arm-arm-leg-leg-rope)
      - [] replace line with letter is the guess is correct and update Letter constructor to true
  - [] if state of Letter.guessed is true for all letters the game has been won
    - congratulate user
  - [] reduce chances by one if the guess is wrong
  - [] if there are no more chances the game is over and user lost

- [] create README.MD 
- [] refactor
  - [] modularize
  - [] clean up
  - [] comment
  - [] manual Tests

## Bonus

- [] greet player and capture userName
- [] user.js
  - [] store user Name, letters used, number of tries???  
- [] output data to log.txt file
