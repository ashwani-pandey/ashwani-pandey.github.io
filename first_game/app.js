
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying) {
		// get a random number
		var dice = Math.floor(Math.random()*6) + 1;

		// display the result in the form of image
		var diceDOM = document.querySelector(".dice");
		diceDOM.style.display = "block";
		diceDOM.src = 'dice-' + dice + '.png';

		// switch the active player if dice rolls to 1
		if(dice !== 1){
			// change the current score of the active player
			roundScore += dice;
			document.getElementById('current-' + activePlayer).textContent = roundScore;
		} else {
			nextPlayer();
		}
	}	
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying) {
		// 1. add the current score to the global score
		scores[activePlayer] += roundScore;
		document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

		// 3. check if player won the game
		if(scores[activePlayer]>=100){
			document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
			document.querySelector(".dice").style.display = "none";
			document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
			document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
			gamePlaying = false;
		} else {
			// 2. switch the player
			nextPlayer();
		}
	}	
});

function nextPlayer(){
		roundScore = 0;
		document.querySelector(".dice").style.display = "none";
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		document.getElementById('current-0').textContent = 0;
		document.getElementById('current-1').textContent = 0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active'); 
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	// all the values should be set to zero
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector("#current-0").textContent = 0;
	document.querySelector("#current-1").textContent = 0;
	document.querySelector("#score-0").textContent = 0;
	document.querySelector("#score-1").textContent = 0;

	// dice should be hidden
	document.querySelector(".dice").style.display = "none";

	// the active player should be first player, and the player name text should be changed back
	document.querySelector("#name-0").textContent = "Player 1";
	document.querySelector("#name-1").textContent = "Player 2";

	document.querySelector(".player-0-panel").classList.remove("winner");
	document.querySelector(".player-1-panel").classList.remove("winner");
	document.querySelector(".player-0-panel").classList.remove("active");
	document.querySelector(".player-1-panel").classList.remove("active");
	document.querySelector(".player-0-panel").classList.add("active");
}







