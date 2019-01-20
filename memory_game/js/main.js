// Cards setup
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];


// Game Controls - Timer and Reset Button
var gameControls = document.getElementById('controls');
var showGameControls = function() {
	// Remove 'hidden' class from controls to show timer and reset button
	gameControls.classList.remove('hidden');
}

// Timer -- NOTE: Copied from stackoverflow, with modifications (see below)
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

// Conditional statement added to start timer when at least 1 card is in play and stop when two cards are in play
function setTime() {
	if (cardsInPlay.length >= 1 && cardsInPlay.length < 2) {
		++totalSeconds;
  		secondsLabel.innerHTML = pad(totalSeconds % 60);
 		minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	}
  
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// Reset
var resetButton = document.getElementById('reset');
var resetBoard = function() {
	window.location.reload(false);
};
resetButton.addEventListener('click', resetBoard);

// Check for match
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry! Try again.");
		}
	}
}


// Flip cards, including show game controls and check for match
var flipCard = function() {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	// Function to show the game controls
	showGameControls();
	// setTimeout is used to delay the checkForMatch function - so that there is a delay between the card image changing and the alert being displayed
	setTimeout(function() {
		checkForMatch();
	}, 100);
};


// Create board
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();
