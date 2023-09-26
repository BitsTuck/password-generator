// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // All your code here
// var numChar = window.prompt
// console.log(numChar);
// var inclNums = window.confirm true/false

// array for each character type
// var numArray = ["0","1"]

// if statement
// var options =[];
  // if true push/concat that array into a new array var

// for loop through options array based on required characters
  // Random index value for every loop
  // Google this; How to randomly choose a value from an array
  // var chosenArr = [];
  // turn array into string

  return password;
}