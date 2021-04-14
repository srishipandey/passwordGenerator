// String -- is an object
// .fromCharCode() -- is a method
// Browser Character Set

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbols() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(symbols);
