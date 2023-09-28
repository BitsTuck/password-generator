// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numbers = ["0","1","2","3","4","5","6","7","8","9"]

var specialCharacter = ["!","#","$","%","^","&","*","(",")","~","+"]

var numChar;

var charList = []

var letsStart = function() {
  var newUser = window.confirm("Hello! Thank you for coming to the password generator. Please answer a few questions about the type of password you would like. To proceed, click OK."); 

  if (newUser== true) {
    numChar = window.prompt ("Please select the number of characters you would like for your password.", "Any whole number between 8 and 128");
    console.log(numChar);
   } else {
     alert ("Thanks for stopping by.");
   } 

   if (numChar < 8) {
    window.alert ("Please choose a number greater than 8"); 
    letsStart();
   } else if (numChar > 128) {
    window.alert ("Please choose a number less than 128");
    letsStart();
  }
   }
letsStart();

var characters = function () {
  var capLet = window.confirm ("Would you like your password to have capital letters? Click OK for yes, Click Cancel for no.")
  console.log(capLet)

  var lowLet = window.confirm ("Would you like your password to have lowercase letters? Click OK for yes, Click Cancel for no.")

  var number = window.confirm ("Would you like your password to have numbers? Click OK for yes, Click Cancel for no.")

  var specChar = window.confirm ("Would you like your password to have special characters? Click OK for yes, Click Cancel for no")
  console.log(capLet, lowLet, number, specChar)

  if (capLet === true) {
    charList.push(upperCase);
  }

  if (lowLet === true) {
    charList.push(lowerCase);
  }

  if (number === true) {
    charList.push(numbers);
  }

  if (specChar === true) {
    charList.push(specialCharacter);
  }
  console.log (charList)
}

characters();








// function leroy(x, y){
//   x = Math.sqrt(x)
//   return x + y
// }

// const jenkins = leroy(5, 8)
// console.log(jenkins)





//DO NOT PUSH THE BUTTON YET
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

// Start here

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

  // return password;






