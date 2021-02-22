// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function 
function generatePassword(
    passwordLength,
    includeNumeric,
    includeSpecial,
    includeLowercase,
    includeUppercase
) {

// Write an array string  
let characterOptions = []

let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", ":", ";", "'", "", "<", ",", ">", ".", "?", "/", "|", "{", "}", "[",
"]", "<", ">",];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Evaluate function
if (includeSpecial) {
  characterOptions = characterOptions.concat(special);
}

if (includeUppercase) {
  characterOptions = characterOptions.concat(uppercase);
}

if (includeLowercase) {
  characterOptions = characterOptions.concat(lowercase);
}

// No variable added
let res = "";

  console.log(passwordLength);

// Loop the random password
  for (i=0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characterOptions.length)  
  res += characterOptions[randomIndex]
  }
  return res
}

// Write password to the #password input
function writePassword() {
    let passwordLength = window.prompt("How many characters would you like your password to contain?");
    let includeNumeric = window.confirm("Click OK to confirm including numeric characters.");
    let includeSpecial = window.confirm("Click OK to confirm including special characters.");
    let includeLowercase = window.confirm("Click OK to confirm including lowercase characters.");
    let includeUppercase = window.confirm("Click OK to confirm including uppercase characters.");

// Generate password index
  var password = generatePassword(
    passwordLength,
    includeNumeric,
    includeSpecial,
    includeLowercase,
    includeUppercase
    );
  
  // Password text variable
    var passwordText = document.querySelector("#password");
  
  // Add password text to generate password
    passwordText.value = password;
  
  }


  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  

