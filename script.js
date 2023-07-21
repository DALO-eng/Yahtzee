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

const getNumberFromString = function (selectedDices) {
  return selectedDices.split(",").map((x) => Number(x));
};

const checkValidDiceSelection = function (dices, selectedInput) {
  const dicesRolled = [...dices];
  console.log(dicesRolled, selectedInput);
  const selectedDices = [];
  for (let i = 0; i < selectedInput.length; i++) {
    if (dicesRolled.includes(selectedInput[i])) {
      selectedDices.push(selectedInput[i]);
      dicesRolled.splice(dicesRolled.indexOf(selectedInput[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};

const throwingPhase = function () {
  let playerDices = [];
  let dicesLeft = 5;
  for (let i = 0; i < 3; i++) {
    let validation = false;
    const currentDices = rollDices(dicesLeft);
    while (!validation) {
      let keepingDices = prompt(
        `Enter the dices you wanna keep: ${currentDices} \nEx:4,5,6`
      );
      const selectedDices = getNumberFromString(keepingDices);
      if (checkValidDiceSelection(currentDices, selectedDices)) {
        playerDices = playerDices.concat(selectedDices);
        dicesLeft -= playerDices.length;
        validation = true;
        console.log(playerDices);
      } else alert("Wrong input! Please try again");
    }
    if (playerDices.length === 5) break;
  }
  alert(`Your dices scores: ${playerDices}`);
};
