'use strict';

//Creo las constantes a partir de elementos del HTML:
const inputNumber = document.querySelector('.js-inputNumber');
const buttonTest = document.querySelector('.js-inputButtonTest');
const inputHint = document.querySelector('.js-inputHint');
const inputTried = document.querySelector('.js-inputTried');

//Función para obtener un número aleatorio de 1 a 100 y la guardo en una constante:
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//Función para saber si hemos acertado al introducir el número:
function takeNumber(event) {
  event.preventDefault();
  const inputNumberValue = parseInt(inputNumber.value);
  if (inputNumberValue < 1 || inputNumberValue > 100) {
    inputHint.innerText = 'El número debe estar entre 1 y 100';
  } else if (inputNumberValue < randomNumber) {
    inputHint.innerText = 'Demasiado bajo';
  } else if (inputNumberValue > randomNumber) {
    inputHint.innerText = 'Demasiado alto';
  } else {
    inputHint.innerText = 'Felicidades, has ganado!!';
    return;
  }
}
//Función contador, que sumará +1 o no según el resultado obtenido
let counter = 0;
function numberTries(event) {
  event.preventDefault();
  const inputNumberValue = inputNumber.value;
  const inputNumberValueInteger = parseInt(inputNumber.value);
  if (inputNumberValue === '') {
    counter = counter;
    inputHint.innerText = 'Introduce un número, por favor';
  } else if (inputNumberValueInteger === randomNumber) {
    counter = counter;
  } else {
    counter++;
    inputTried.innerText = 'Número de intentos: ' + counter;
  }
}

function handleGuessNumber(event) {
  event.preventDefault();
  takeNumber(event);
  numberTries(event);
}

buttonTest.addEventListener('click', handleGuessNumber);
