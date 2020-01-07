/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- But, if the player rolls a 1, all his ROUND score gets losts. After that, it´s the next players turn
-  The player can choose hold which means that his ROUND score gets added ton his GLOBAL score. After that its next players turn
 - The first player to reach 100 points on GLOBAL score wins the game
 */


var scorePlayerTwo = 0 ;
var  activePlayer  = 0;
var player1 =  {
     score : 0,
     active :false
};

function diceRoll(){
    return Math.floor(Math.random() * 99) + 1 ;
}

var diceValue = diceRoll();

var scorePlayerOne = document.querySelector('#current-1').textContent;
scorePlayerOne += diceValue;
scorePlayerOne = Number.parseInt(scorePlayerOne);
document.querySelector('#current-' + activePlayer).textContent  =scorePlayerOne; //DOM example, we are manipulating the label current-0  every refresh right now

function doesPlayerWin(player) {
    return player.score === 100;
}

