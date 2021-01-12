var diceImg = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var dice1 = Math.floor(Math.random() * 6);
var dice2 = Math.floor(Math.random() * 6);

document.querySelector(".img1").setAttribute("src", diceImg[dice1]);
document.querySelector(".img2").setAttribute("src", diceImg[dice2]);

if(dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
} else if(dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}