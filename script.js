// String -- is an object
// .fromCharCode() -- is a method
// Browser Character Set

// DOM
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	numbers: getRandomNumbers,
	symbols: getRandomSymbols,
};

// Events
	generateEl.addEventListener("click", () => {
        const length = +lengthEl.value
        const hasUpper = uppercaseEl.checked
        const hasLower = lowercaseEl.checked
        const hasNumber = numbersEl.checked
        const hasSymbols = symbolsEl.checked
	});


// Generator Functions
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
