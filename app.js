const startGameEl = document.getElementById("startGame");

startGameEl.addEventListener('click', function () {
 console.log('clicked');
})

function buildDeck() {
  let values = [
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
  let types = ["♥️", "♠️", "♦️", "♣️"];
 let deck = [];

  for (let i = 0; i < types.length; i++) {
   for (let j = 0; j < values.length; j++) {
    deck.push(values[j] + " " + types[i]);
    console.log(deck);
    }
  }
}

