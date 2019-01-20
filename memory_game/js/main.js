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

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry! Try again.");
		}
	}
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id')
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
	// setTimeout is used to delay the checkForMatch function - so that there is a delay between the card image changing and the alert being displayed
	setTimeout(function() {
		checkForMatch();
	}, 100);
};


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