const dealerSumEl = document.getElementById("dealerSum");
const gameStartEl = document.getElementById("game");
const startGameBtn = document.getElementById("startGame");
const introEl = document.getElementById("intro");
const drawEl = document.getElementById("draw");
const messageEl = document.getElementById("message");
const playerInfo = document.getElementById('info')


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const player = {
  name: 'Olga',
  chips: 145,
}
playerInfo.textContent = player.name + ':$' + player.chips;

startGameBtn.addEventListener("click", function () {
  introEl.style.display = "none";
  gameStartEl.style.display = "block";
  startGame();
});

drawEl.addEventListener("click", newCard);

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  dealerSumEl.textContent = " ";
  for (let i = 0; i < cards.length; i++) {
    dealerSumEl.textContent += cards[i] + " ";
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function getRandomCard() {
  let randomNum = Math.floor(Math.random() * 13) + 1;
  if (randomNum === 1) {
    return 11;
  } else if (randomNum > 10) {
    return 10;
  } else {
    return randomNum;
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
