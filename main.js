'use strict';

const inputNumber = document.querySelector('.js-inputNumber');
const buttonTest = document.querySelector('.js-inputButtonTest');
const inputHint = document.querySelector('.js-inputHint');
const inputTried = document.querySelector('.js-inputTried');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

function handleTakeNumber(event) {
  event.preventDefault();
  const inputNumberValue = parseInt(inputNumber.value);
  console.log(inputNumberValue);
  if (inputNumberValue < 1 || inputNumberValue > 100) {
    inputHint.innerText = 'Elnúmero debe estar entre 1 y 100';
  } else if (inputNumberValue < randomNumber) {
    inputHint.innerText = 'Demasiado bajo';
  } else if (inputNumberValue > randomNumber) {
    inputHint.innerText = 'Demasiado alto';
  } else {
    inputHint.innerText = 'Has ganado, campeona';
  }
}
buttonTest.addEventListener('click', handleTakeNumber);
