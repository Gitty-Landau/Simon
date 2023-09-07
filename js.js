const yellowButton = document.querySelector(".yellow");
const blueButton = document.querySelector(".blue");
const redButton = document.querySelector(".red");
const greenButton = document.querySelector(".green");
const gameOverBox = document.querySelector(".game_over");
const playAgainButton = document.querySelector(".play_again");

//Computers Turn
let flashesArr = [];
function computerPlay() {
  //New Random Number
  const randomNum = Math.floor(Math.random() * 4);
  while (randomNum == flashesArr[flashesArr.length - 1]) {
    randomNum = Math.floor(Math.random() * 4);
  }
  flashesArr[flashesArr.length] = randomNum;
  //First Toggle
  flashesArr.forEach((element, index) => {
    console.log(element);
    setTimeout(() => {
      switch (element) {
        case 0:
          yellowToggle();
          break;
        case 1:
          blueToggle();
          break;
        case 2:
          redToggle();
          break;
        case 3:
          greenToggle();
          break;
      }
    }, (index + 1) * 1000);
  });
  //Second Toggle
  flashesArr.forEach((element, index) => {
    console.log(element);
    setTimeout(() => {
      switch (element) {
        case 0:
          yellowToggle();
          break;
        case 1:
          blueToggle();
          break;
        case 2:
          redToggle();
          break;
        case 3:
          greenToggle();
          break;
      }
    }, (index + 2) * 1000);
  });
  startUsersTurn();
}
//users turn
let isUsersTurn = false;
let userGuessArr = [];
function startUsersTurn() {
  isUsersTurn = true;
  userGuessArr = [];
}
if (!isUsersTurn) {
  computerPlay();
}
function checkIfCorrect() {
  for (let i = 0; i < flashesArr.length; i++) {
    if (flashesArr[i] != userGuessArr[i]) {
      console.log(flashesArr[i], userGuessArr[i]);
      return false;
    }
  }
  return true;
}
//Play Again Button Click
playAgainButton.addEventListener("click", function () {
  flashesArr = [];
  isUsersTurn = false;
  userGuessArr = [];
  gameOverBox.classList.add("hide");
  computerPlay();
});
//Event Listeners
yellowButton.addEventListener("click", function () {
  if (isUsersTurn) {
    if (userGuessArr.length < flashesArr.length) {
      highlightYellowButton();
      userGuessArr[userGuessArr.length] = 0;
      if (userGuessArr.length == flashesArr.length) {
        if (checkIfCorrect()) {
          console.log("correct");
          computerPlay();
        } else {
          gameOverBox.classList.remove("hide");
        }
      }
    }
    console.log(userGuessArr);
  }
});

blueButton.addEventListener("click", function () {
  if (isUsersTurn) {
    if (userGuessArr.length < flashesArr.length) {
      highlightBlueButton();
      userGuessArr[userGuessArr.length] = 1;
      if (userGuessArr.length == flashesArr.length) {
        if (checkIfCorrect()) {
          console.log("correct");
          computerPlay();
        } else {
          gameOverBox.classList.remove("hide");
        }
      }
    }
    console.log(userGuessArr);
  }
});
redButton.addEventListener("click", function () {
  if (isUsersTurn) {
    if (userGuessArr.length < flashesArr.length) {
      highlightRedButton();
      userGuessArr[userGuessArr.length] = 2;
      if (userGuessArr.length == flashesArr.length) {
        if (checkIfCorrect()) {
          console.log("correct");
          computerPlay();
        } else {
          gameOverBox.classList.remove("hide");
        }
      }
    }
    console.log(userGuessArr);
  }
});
greenButton.addEventListener("click", function () {
  if (isUsersTurn) {
    if (userGuessArr.length < flashesArr.length) {
      highlightGreenButton();
      userGuessArr[userGuessArr.length] = 3;
      if (userGuessArr.length == flashesArr.length) {
        if (checkIfCorrect()) {
          console.log("correct");
          computerPlay();
        } else {
          gameOverBox.classList.remove("hide");
        }
      }
    }
    console.log(userGuessArr);
  }
});
//Toggles
function yellowToggle() {
  yellowButton.classList.toggle("yellow_light");
}
function blueToggle() {
  blueButton.classList.toggle("blue_light");
}
function redToggle() {
  redButton.classList.toggle("red_light");
}
function greenToggle() {
  greenButton.classList.toggle("green_light");
}
//Highlight Functions
function highlightYellowButton() {
  yellowToggle();
  const yellowTimer = setTimeout(() => {
    yellowToggle();
  }, 200);
}
function highlightBlueButton() {
  blueToggle();
  const blueTimer = setTimeout(() => {
    blueToggle();
  }, 200);
}
function highlightRedButton() {
  redToggle();
  const redTimer = setTimeout(() => {
    redToggle();
  }, 200);
}
function highlightGreenButton() {
  greenToggle();
  const greenTimer = setTimeout(() => {
    greenToggle();
  }, 200);
}
