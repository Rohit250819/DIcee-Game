// For first dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceimg1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceimg1);

// For second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceimg2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDiceimg2);

// Winning Statement

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "&#128681 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681";
} else {
  document.querySelector("h1").innerHTML = "Match Draw!";
}
