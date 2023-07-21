"use strict";

const dicesEl = document.querySelectorAll(".dice");
const playBtnEl = document.querySelector(".play-button");

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
  const dices = rollDices(5);
  dicesEl.forEach((dice, i) => {
    dice.src = `./imgs/dice-${dices[i]}.png`;
  });
});
