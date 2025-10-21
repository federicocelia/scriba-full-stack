let firstCard = 10;
let secondCard = 8;
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;
let newCardButton = document.querySelector("#new-card-button");
newCardButton.style.display = "none";

let message = "";
let cards = "";

let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

let startButton = document.querySelector("#start-button");

function startGame() {
  rendertGame();
}

function rendertGame() {
  console.log("Sum: " + sum);
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
    newCardButton.style.display = "inline";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🤑";
    newCardButton.style.display = "inline";
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

function newCard() {
  let thirdCard = 3;
  sum += thirdCard;
  startGame();
  cardsEl.textContent = `Cards: ${firstCard} - ${secondCard} - ${thirdCard}`;
}
