// Assignment Code
var generateBtn = document.querySelector("#generate");
function askQuestions(){
  lowerCase = confirm("Do you want to use lowercase letters?");
  upperCase = confirm("Do you want to use uppercase letters?");
  numbers = confirm("Do you want to use numbers?");
  symbols = confirm ("Do you want to use symbols");
}


var passwordChoice = {
  passwordLength : 0,
  passwordLowerCase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  passwordUpperCase : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  passwordNumbers  : ['0','1','2','3','4','5','6','7','8','9'],
  passwordCharacters : ['`','~','!','@','#','$','%','^','&','*','(',')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '<', '.', '>', '/', '?']
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){

  var passwordLength = 0;
  var upperCase;
  var lowerCase;
  var numbers;
  var symbols;
  passwordLength = 0;
  passwordChoice.passwordlength = 0;

  if (passwordLength < 8 || passwordLength > 128){
    passwordLength =prompt("Your password must between 8 and 128 numbers!");
    passwordcharacters =prompt("Do you want any characters in your password?");
    passwordLowercase = prompt("Do you want any lowercase in your password?");
    passwordUppercase = prompt("do you want any uppercase in your password?");
    passwordNumbers = prompt("Do you want any numbers in your password")
}
}
console.log(generatePassword);


