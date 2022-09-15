// Assignment Code
  var generateBtn = document.querySelector("#generate");

  var passwordLowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var passwordUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var passwordNumbers  = ['0','1','2','3','4','5','6','7','8','9'];
  var passwordSymbols = ['`','~','!','@','#','$','%','^','&','*','(',')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '<', '.', '>', '/', '?']


  var passwordLength = "";
  var symbols;
  var numbers;
  var upperCase;
  var lowerCase;

  function generatePassword(){
    var passwordLength = (prompt("How many characters would you like to have in your password?"));

    if (passwordLength <= 8 || passwordLength >= 128){
         alert("Your password must between 8 and 128 characters.");
         var passwordLength = (prompt("How many characters would you like to have in your password?"))
         alert("")
    }

    var symbols =prompt("Do you want any characters in your password?");
    var numbers = prompt("Do you want any numbers in your password")
    var lowercase = prompt("Do you want any lowercase in your password?");
    var uppercase = prompt("do you want any uppercase in your password?");

    if (symbols === false && numbers === false && lowercase === false && uppercase === false){
      prompt("You must choose atleast one out of all");
      var symbols =prompt("Do you want any characters in your password?");
      var numbers = prompt("Do you want any numbers in your password")
      var lowercase = prompt("Do you want any lowercase in your password?");
      var uppercase = prompt("do you want any uppercase in your password?");
    }
    
    
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
