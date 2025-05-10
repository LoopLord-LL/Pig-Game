// ALERT: cota copilotma damexmara :D
const dice = document.getElementById("dice");
const rollButton = document.getElementById("roll");

const currentPoint1 = document.getElementById("current-point-p1");
const currentPoint2 = document.getElementById("current-point-p2");

const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const scoreP1 = document.getElementById("p1-score");
const scoreP2 = document.getElementById("p2-score");

const holdButton = document.querySelector(".hold");
const newGameButton = document.querySelector(".new-game");
const winMessage = document.getElementById("win-message");

// Game Variables
let totalScores = [0, 0];
let totalPoint = 0;
let currentPlayer = 1;

// Start a new game
newGameButton.onclick = function () {
  totalScores = [0, 0];
  totalPoint = 0;
  currentPlayer = 1;

  currentPoint1.innerHTML = "0";
  currentPoint2.innerHTML = "0";
  scoreP1.innerHTML = "0";
  scoreP2.innerHTML = "0";

  player1.style.backgroundColor = "#e4bfd0";
  player1.style.filter = "none";
  player2.style.backgroundColor = "#f192be";
  player2.style.filter = "blur(2px)";

  winMessage.style.display = "none";

  // Enable buttons
  rollButton.disabled = false;
  holdButton.disabled = false;

  for (let i = 1; i <= 6; i++) {
    dice.classList.remove("show-" + i);
  }
};

// Roll the dice
rollButton.onclick = function () {
  const diceValue = rollDice();

  setTimeout(() => {
    if (diceValue === 1) {
      // If dice is '1', switch player
      switchPlayer();
    } else {
      // Count points
      totalPoint += diceValue;
      updateCurrentPoints(totalPoint);
    }
  }, 1000); 
};

// Hold the score
holdButton.onclick = function () {
  if (currentPlayer === 1) {
    totalScores[0] += totalPoint;
    scoreP1.innerHTML = totalScores[0];

    if (totalScores[0] >= 100) {
      player1.style.filter = "blur(3px)";
      player2.style.filter = "blur(3px)";

      winMessage.innerHTML = "PLAYER 1 WIN!";
      winMessage.style.display = "block";
      disableGame();
      return;
    }
  } else {
    totalScores[1] += totalPoint;
    scoreP2.innerHTML = totalScores[1];

    if (totalScores[1] >= 100) {
      player1.style.filter = "blur(3px)";
      player2.style.filter = "blur(3px)";

      winMessage.innerHTML = "PLAYER 2 WIN!";
      winMessage.style.display = "block";
      disableGame();
      return;
    }
  }

  totalPoint = 0;
  updateCurrentPoints(0);
  switchPlayer();
};

// point update
function updateCurrentPoints(score) {
  if (currentPlayer === 1) {
    currentPoint1.innerHTML = score;
  } else {
    currentPoint2.innerHTML = score;
  }
}

// switch player
function switchPlayer() {
  totalPoint = 0;
  currentPoint1.innerHTML = "0";
  currentPoint2.innerHTML = "0";

  if (currentPlayer === 1) {
    currentPlayer = 2;
    player1.style.backgroundColor = "#f192be";
    player1.style.filter = "blur(2px)";
    player2.style.backgroundColor = "#e4bfd0";
    player2.style.filter = "none";
  } else {
    currentPlayer = 1;
    player2.style.backgroundColor = "#f192be";
    player2.style.filter = "blur(2px)";
    player1.style.backgroundColor = "#e4bfd0";
    player1.style.filter = "none";
  }
}

// Roll dice
function rollDice() {
  const randomDot = Math.floor(Math.random() * 6 + 1);

  console.log("Dice rolled:", randomDot);

  for (let i = 1; i <= 6; i++) {
    dice.classList.remove("show-" + i);
  }
  dice.classList.add("show-" + randomDot);

  return randomDot;
}

// after win disable buttons
function disableGame() {
  rollButton.disabled = true;
  holdButton.disabled = true;
}
