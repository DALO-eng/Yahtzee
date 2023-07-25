"use strict";

const playBtnEl = document.getElementById("play-btn");
const diceTableEl = document.querySelector(".dice-table");
const dicesEl = document.querySelectorAll(".dice");
const dicesInputEl = document.querySelectorAll(".dice-input");
const rollingBtnsEl = document.querySelector(".rolling-section");
const skipBtnEl = document.getElementById("skip-btn");
const rerollBtnEl = document.getElementById("reroll-btn");

let playing, rollsLeft, currentDices;

const beginGame = function () {
  playing = true;
  rollsLeft = 3;
  currentDices = [];
  playBtnEl.classList.add("hidden");
  diceTableEl.classList.remove("hidden");
  rollingBtnsEl.classList.remove("hidden");
};

const rollDice = function () {
  return 1 + Math.floor(Math.random() * 6);
};

const rollDices = function (n) {
  const dices = [];
  for (let i = 0; i < n; i++) {
    dices.push(rollDice());
  }
  getDiceImg(dices);
};

const isDiceUnchecked = function (index) {
  return !dicesInputEl[index].checked;
};

const getUncheckedDicesLength = function () {
  let diceInputsArr = Array.from(dicesInputEl);
  return diceInputsArr.filter((input) => !input.checked).length;
};

const getDiceImg = function (dices) {
  let currentNewDiceIndex = 0;
  dicesEl.forEach((dice, i) => {
    if (isDiceUnchecked(i)) {
      dice.src = `./imgs/dice-${dices[currentNewDiceIndex]}.png`;
      currentDices[i] = dices[currentNewDiceIndex];
      currentNewDiceIndex++;
    }
  });
};

const checkRollsLeft = function () {
  if (!rollsLeft) {
    playing = false;
    console.log(currentDices);
  }
};

playBtnEl.addEventListener("click", () => {
  beginGame();
  rollDices(5);
});

rerollBtnEl.addEventListener("click", () => {
  if (playing) {
    rollDices(getUncheckedDicesLength());
    rollsLeft--;
    checkRollsLeft();
  }
});

skipBtnEl.addEventListener("click", () => {
  if (playing) {
    rollsLeft = 0;
    checkRollsLeft();
  }
});
