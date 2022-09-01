// Assignment Code
var generateBtn = document.querySelector("#generate");
// created a function to call later
function generatePassword() {
  var passLength = prompt(
    "Let's start with password length. Choose a number between 8 - 128!!"
  );
  var lowerCase = confirm("Care for some lower cases in that password?");
  var upperCase = confirm("How about some uppers?");
  var numeric = confirm("Want to throw some numbers in there?");
  var specialCharacters = confirm("Now what about some special characters?!");
  var password = "";
  var lowerCaseArr = [
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
  var upperCaseArr = [
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
  var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacterArr = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    " < ",
    "=",
    " > ",
    " ? ",
    "@",
    "[",
    "\\",
    "]",
    " ^ ",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var allCharacters = [];
  // created conditional statments for arrays
  if (lowerCase === true) {
    allCharacters.push.apply(allCharacters, lowerCaseArr);
  }
  if (upperCase === true) {
    allCharacters.push.apply(allCharacters, upperCaseArr);
  }
  if (numeric === true) {
    allCharacters.push.apply(allCharacters, numericArr);
  }
  if (specialCharacters === true) {
    allCharacters.push.apply(allCharacters, specialCharacterArr);
  }

  // created for loop for generating a random password
  for (var i = 0; i < passLength; i++) {
    var random = Math.floor(Math.random() * allCharacters.length);
    password = password + allCharacters[random];
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
