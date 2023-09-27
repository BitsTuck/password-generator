// Assignment code here
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var numbers = ["0","1","2","3","4","5","6","7","8","9"]

var specChar = ["!","#","$","%","^","&","*","(",")","~","+"]

var numChar = []


var startGenerator = window.confirm("Hello! Thank you for coming to the password generator. Please answer a few questions about the type of password you would like. To proceed, click OK."); 

if (startGenerator== true) {
  window.prompt ("Please select the number of characters you would like for your password (8-128).")
} else {
  alert ("Thanks for stopping by.")
}  //Initial greeting/intro. Can proceed (true) or leave (false)



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

Array.fill(number, number, 128)
var charNum = []





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






