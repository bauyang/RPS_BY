
let hands = ["rock", "paper", "scissors"];


function getHand() {
    let rand = Math.random();
    if (rand < 0.34 ){
        return hands[0];
    }else if (rand < 0.67 ){
        return hands[1];
    }else{
        return hands[2];
    }
}
class Player {
	constructor(name) {
		this.name = name;
		this.hand = getHand();
	}	
};
let player1 = new Player("player1");
let player2 = new Player("player2");
function playRound(p1, p2) {
	let hand1 = p1.hand;
	let hand2 = p2.hand;
	console.log(p1.hand);
	console.log(p2.hand);
	if(hand1 == hand2) {
		console.log("It's a tie");
		return null;
	}else if(hand1 == "paper") {
		if(hand2 == "scissors") {
			console.log("player 2 won");
			return p2;
		}
		else {
			console.log("Player 1 won");
			return p1;
		}
	}else if(hand1 == "rock") {
		if(hand2 == "paper") {
			console.log("player 2 won");
			return p2;
		}
		else {
			console.log("Player 1 won");
			return p1;
		}
	}else if(hand1 == "scissors") {
		if(hand2 == "rock") {
			console.log("player 2 won");
			return p2;
		}
		else {
			console.log("Player 1 won");
			return p1;
		}
	}
}
function playGame(p1, p2, playUntil) {
	let result = playRound(p1, p2);
	if(result == null) {
			console.log("Tie round")
	}else if(result == p1) {
			p1Wins++;
		if(p1Wins == score) {
				console.log("Player 1 won the game");
		}
	}else if(result == p2) {
			p2Wins++;
			if(p2Wins == score) {
				console.log("Player 2 won the game");
		}
	}
}
let score = 5;
let p1Wins = 0;
let p2Wins = 0;
while(score != p1Wins && score != p2Wins) {
	let player1 = new Player("player1");
	let player2 = new Player("player2");
	playGame(player1, player2);
}