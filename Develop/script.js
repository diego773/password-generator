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

  
let characterOptions = []

let lowercase = ["a", "b", "c",];
let uppercase = ["A", "B", "C",];
let special = ["!", "@", "#",];

if (includeSpecial) {
  characterOptions = characterOptions.concat(special);
}

if (includeUppercase) {
  characterOptions = characterOptions.concat(uppercase);
}

if (includeLowercase) {
  characterOptions = characterOptions.concat(lowercase);
}

let res 

  console.log(passwordLength);

  for (i=0; i < password.Lenght; i++) {
      let randomIndex = Math.floor(Match.random() * alphabet.length)  
  res += alphabet[randomIndex]
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
  
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  

