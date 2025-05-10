const dice = document.getElementById("dice");

const rollButton = document.getElementById("roll");

rollButton.onclick = function () {
  rollDice();
};

function rollDice() {
  const randomDot = Math.floor(Math.random() * 6 + 1);

  console.log(randomDot);

  for (let i = 1; i <= 6; i++) {
    dice.classList.remove("show-" + i);
    if (randomDot === i) {
      dice.classList.add("show-" + i);
    }
  }
}
