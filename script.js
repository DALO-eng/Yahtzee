"use strict";

const diceTableEl = document.querySelector(".dice-table");
const dicesEl = document.querySelectorAll(".dice");
const playBtnEl = document.querySelector(".play-button");
const rollingBtnsEl = document.querySelector(".rolling-section");

let playing, rollsLeft;

const beginGame = function () {
  playing = true;
  rollsLeft = 3;
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
  return dices;
};

playBtnEl.addEventListener("click", () => {
  beginGame();
  const dices = rollDices(5);
  dicesEl.forEach((dice, i) => {
    dice.src = `./imgs/dice-${dices[i]}.png`;
  });
});
