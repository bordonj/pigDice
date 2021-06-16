## Specifications ##
Describe: rollDie()
Test: "It should return a random number between 1 and 6 with each roll"
Expect "it will return a number between 1 and 6

Describe: rollDie()
Test: "If the number is a 1, turnScore = 0 and totalScore = 0, move on to next player's turn."
Expect "it will generate a turnScore of 0 if the roll is 1."

Describe: rollDie()
Test: "If the number is between 2 and 6 add the player's turnScore to the player's totalScore, player gets another turn."
Expect: "it will add the turnScore to the totalScore"

Describe: holdDie()
Test: "If player chooses holdDie, turnScore added to totalScore and game moves to next player."
Expected: "It will add turnScore to totalScore and turn the score value"


