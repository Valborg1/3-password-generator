
var uppercaseOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N" ,"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "\"", "\'", "(", ")", "+", "\,", "-", ".", "/", ":", ";", "<", ">", "=", "?", "\[", "\]", "_", "`", "\{", "\}", "~"];

function getRandomUppercase() {
  return uppercaseOptions[Math.floor(Math.random() * uppercaseOptions.length)];
}

function getRandomLowercase() {
  return lowercaseOptions[Math.floor(Math.random() * lowercaseOptions.length)];
}

function getRandomNumber() {
  return numberOptions[Math.floor(Math.random() * numberOptions.length)];
}

function getRandomSymbol() {
  return symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
}

var uppercaseCheckboxEl = document.getElementById("uppercaseCheckbox");
var lowercaseCheckboxEl = document.getElementById("lowercaseCheckbox");
var numbersCheckboxEl = document.getElementById("numbersCheckbox");
var symbolsCheckboxEl = document.getElementById("symbolsCheckbox");
var passwordEl = document.getElementById("password");
var generateEl = document.getElementById("generate");



var randomFunction = {
  upper : getRandomUppercase,
  lower : getRandomLowercase,
  number : getRandomNumber,
  symbol : getRandomSymbol
};

generateEl.addEventListener('click', () => {

  var hasUpper = uppercaseCheckboxEl.checked;
  var hasLower = lowercaseCheckboxEl.checked;
  var hasNumber = numbersCheckboxEl.checked;
  var hasSymbol = symbolsCheckboxEl.checked;

  passwordEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol);
});



function generatePassword(upper, lower, number, symbol) {
  let generatedPassword = "";
  length = rangeslider.value

  const typesCount = upper + lower + number + symbol;

  // console.log(typesCount);

// console.log(Object.values({upper:"test"})[0]);


  const typesArr = [{upper:upper}, {lower:lower}, {number:number}, {symbol:symbol}].filter(item => Object.values(item)[0]);

// console.log(Object.values({upper})[0]);

  if (typesCount === 0) {
    return "Please select one of the boxes above.";
  }

  for (var i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
  
}















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);



