const dealerSumEl = document.getElementById("dealerSum");
const gameStartEl = document.getElementById("game");
const startGameBtn = document.getElementById("startGame");
const introEl = document.getElementById("intro");

let cards = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

startGameBtn.addEventListener("click", function () {
  introEl.style.display = "none";
  gameStartEl.style.display = "block";
});

function renderGame() {}

function getRandomCard() {
  return Math.floor(Math.random() * cards.length);
}
