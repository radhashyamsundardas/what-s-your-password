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
    }

    var symbols = confirm("Do you want any symbols in your password?");
    var numbers = confirm("Do you want any numbers in your password");
    var lowerCase = confirm("Do you want any lowercase in your password?");
    var upperCase = confirm("do you want any uppercase in your password?");

    if (symbols === false && numbers === false && lowerCase === false && upperCase === false){
      prompt("You must choose atleast one out of all");
      var symbols =prompt("Do you want any characters in your password?");
      var numbers = prompt("Do you want any numbers in your password");
      var lowerCase = prompt("Do you want any lowercase in your password?");
      var upperCase = prompt("do you want any uppercase in your password?");
    }
    var passwordCharacters = []

    if (symbols){
      passwordCharacters = passwordCharacters.concat(passwordSymbols)
    }
    if (numbers){
      passwordCharacters = passwordCharacters.concat(passwordNumbers)
    }
    if (lowerCase){
      passwordCharacters = passwordCharacters.concat(passwordLowerCase)
    }
    if(upperCase){
      passwordCharacters = passwordCharacters.concat(passwordUpperCase)
    }
    var randomPassword = ""
    for (var i =0; i < passwordLength; i++){
      randomPassword =randomPassword + passwordCharacters[Math.floor(Math.random) * passwordCharacters.length];
    }
      return randomPassword;
    }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);