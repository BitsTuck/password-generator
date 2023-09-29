//Variable arrays listing all of the possible characters to include in the password
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacter = ["!","#","$","%","^","&","*","(",")","~","+"]
//This variable will hold the number of characters input by the user
var numChar = [];
//This variable will hold the characters selected by the user-- upperCase, lowerCase, numbers, specialCharacter-- in any combination.
var charList = [];


//This function starts the password generator and asks the user for the number of characters they would like their password to be. If a user selects a number less than 8 or greater than 128, they will be returned to the beginning of the function. If they cancel the request, they will receive a message thanking them for coming to the site.
var letsStart = function() {
  var newUser = window.confirm("Hello! Thank you for coming to the password generator. Please answer a few questions about the type of password you would like. To proceed, click OK.");
  if (newUser) {
    numChar = parseInt(window.prompt ("Please select the number of characters you would like for your password. Any whole number between 8 and 128."));
    console.log(numChar);
   } else {
     alert ("Thanks for stopping by.");
   }
   if (numChar < 8 || numChar > 128 || isNaN(numChar)) {
    window.alert ("Please choose a whole number between 8 and 128.");
    letsStart();
  }
   }
   
letsStart();

//This section takes the user through a series of confirm windows (that ask the user to click OK or Cancel) to gather Boolean data about what should be included in the password. If the OK button is clicked for any given criteria, that array is pushed to another variable (charList) that will hold the data. If the Cancel button is clicked for any given criteria, the data is not pushed to charList.
var characters = function () {
  var capLet = window.confirm ("Would you like your password to have capital letters? Click OK for yes, Click Cancel for no.")
  var lowLet = window.confirm ("Would you like your password to have lowercase letters? Click OK for yes, Click Cancel for no.")
  var number = window.confirm ("Would you like your password to have numbers? Click OK for yes, Click Cancel for no.")
  var specChar = window.confirm ("Would you like your password to have special characters? Click OK for yes, Click Cancel for no")
  console.log(capLet, lowLet, number, specChar)
  if (capLet) {
    charList.push(...upperCase); 
  } 
  if (lowLet) {
    charList.push(...lowerCase);
  } 
  if (number) {
    charList.push(...numbers);
  } 
  if (specChar) {
    charList.push(...specialCharacter);
  }
  console.log(charList);

  }
  characters();
//This function generates the password by looping back to the charList and grabbing random characters. The loop goes the same number of times as the number that the user selected for numChar. If the user selected a 90 character password, the function loops back 90 times. The password is then returned.

  function generatePassword() {
    var password = " "
    for(var i = 0; i < numChar; i++) {
      var index = Math.floor(Math.random()*charList.length);
      password += charList[index];
    }
    console.log(password);
    return password;
  }

  //This code runs the generatePassword function, and then prompts the user in an alert window (OK button only) to click generate password to see what has been generated.
  var generated = generatePassword()

  window.alert("Thank you! Please push Generate Password to see your new password.")

  //This was the code provided to us for this assignment. It pulls in the password variable that was created above, and pulls it into the HTML (#generate and #password ids) and holds the eventListener that displays the password after the Generate Password button is clicked.
  
  var generateBtn = document.querySelector("#generate");
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  generateBtn.addEventListener("click", writePassword);

