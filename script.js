"use strict";

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

console.log(rollDices(5));
