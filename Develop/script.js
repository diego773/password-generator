// Button to prompt the message
var generateBtn = document.querySelector("#generate");

// Write an array string
var characterOptions = [];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  ":",
  ";",
  "'",
  "",
  "<",
  ",",
  ">",
  ".",
  "?",
  "/",
  "|",
  "{",
  "}",
  "[",
  "]",
  "<",
  ">",
];

var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Generate password options function
function generatePassword(
  passwordLength,
  numericCharacters,
  specialCharacters,
  lowerCaseCharacters,
  upperCaseCharacters
) {
  // First window alert options
  passwordLength = window.prompt(
    "How many characters would you like your password to contain?"
  );

  // alert message if the length characters is either true, greater than or less than
  if (isNaN(passwordLength) === true) {
    alert("Please use numbers for characters length");
    return;
  }

  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters ");
    return;
  }

  if (passwordLength > 128) {
    alert("Password length must be at least 128 characters ");
    return;
  }

  // window message
  numericCharacters = window.confirm(
    "Click OK to confirm including numeric characters."
  );

  specialCharacters = window.confirm(
    "Click OK to confirm including special characters."
  );

  lowerCaseCharacters = window.confirm(
    "Click OK to confirm including lowercase characters."
  );

  upperCaseCharacters = window.confirm(
    "Click OK to confirm including uppercase characters."
  );

  // If user clicks cancel
  if (
    numericCharacters === false &&
    specialCharacters === false &&
    lowerCaseCharacters === false &&
    upperCaseCharacters === false
  ) {
    alert("Choose a character");
    return;
  }

  // concating to merge array
  if (numericCharacters) {
    characterOptions = characterOptions.concat(numeric);
  }

  if (specialCharacters) {
    characterOptions = characterOptions.concat(special);
  }

  if (lowerCaseCharacters) {
    characterOptions = characterOptions.concat(lowercase);
  }

  if (upperCaseCharacters) {
    characterOptions = characterOptions.concat(uppercase);
  }

  // No variable added
  var results = "";

  console.log(passwordLength);

  // Loop the random password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterOptions.length);
    results += characterOptions[randomIndex];
  }
  return results;
}

// window prompt password to the #password input
function writePassword() {
  var password = generatePassword();

  // Password text variable
  var passwordText = document.querySelector("#password");

  // Add password text to generate password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
