# _Pig Dice_ :pig:

_A classic dice game used to demonstrate skill's with JavaScript objects, looping, and brancing.  Created as a team project on a short deadline_


## Team Members :circus_tent:
* _**Adrian Camacho**_
* _**Shoshana Newman**_
* _**Jennifer Bordon**_
* _**John Blalock**_


## Technologies Used :floppy_disk:

* _HTML_
* _CSS_
* _VS code_
* _Bootstrap_
* _JavaScript_
* _JQuery 3.6.0_

## Description :page_with_curl:

_This program plays the classic game of pig dice.  In this game a player rolls one dice as many times as they want.  Each roll is added to their score however if they roll a one their score is erased and moves on to the second player's turn.  The game is played until the first player reaching 100 wins_

## Specs :pushpin:
Describe: `Player() `
Test: 'It should return an object containing the name, total score, and turn score'
Code: `let player = new Player('Jenn');`
Expect: `player = {`
  `playerName: 'Jenn';`
  `totalScore: 0;`
  `turnScore: 0;`
`}`

Describe: `Player.prototype.rollDie()`
Test: 'It should return a random number from 1 to 6, and if it lands on 1 it will reset the scores to 0.
Code: `player.rollDie();`
Expect: `undefined` (if the random number is 1)

Test: 'It should return a random number from 1 to . If it lands on numbers other than 1, it will return that number, and change turnScore to the number while incrementing totalScore by turnScore. 
Code: `player.rollDie();`
Expect: `number between 2 and 6`

Test: 'It should return a random number from 1 to . If the totalScore reaches 100, it will return 'wins'.
Code: `player.rollDie();`
Expect: `wins`

Describe: `Player.prototype.holdDie()`
Test: 'It should keep the totalScore and turnScore the same, and return the object's totalScore.
Code: `player.holdDie();`
Expect: `player.totalScore` 

## Setup/Installation Requirements :triangular_ruler:

* Clone github repo `git clone https://github.com/bordonj/pigDice`:
* Navigate to directory `pig-dice`
* Open `index.html` in your browser.
* Enter your player names and play.


## Known Bugs and Future Changes :bug:

* _Non known at this time_
* _Make real dice that roll_

## License :clipboard:

MIT &copy; 2021 _Adrian Camacho, John Blalock, Shoshana Newman, Jennifer Bordon_

## Contact Information :mailbox:

_Adrian Camacho: adriancamacho18@gmail.com_

_John Blalock: simpledimplejohn@gmail.com_

_Sho Newman: sho.newman@gmail.com_

_Jennifer Bordon: jennifer.bordon@gmail.com_
