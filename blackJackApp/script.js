let firstCard = 12;
let secondCard = 10;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let cards = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let startButton = document.getElementById("start-button");

function startGame() {
  console.log("Sum: " + sum);
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🤑";
    hasBlackJack = true;
    isAlive = true;
  } else {
    message = "You're out of the game! 😞";
    isAlive = false;
  }
  messageEl.textContent = message;
  cardsEl.textContent = `Cards: ${firstCard} - ${secondCard}`;
  sumEl.textContent = `Sum: ${sum}`;
  startButton.textContent = "RESTART GAME";
}
