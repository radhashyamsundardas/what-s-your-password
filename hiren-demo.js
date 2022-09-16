// Assignment Code
var generateBtn = document.querySelector("#generate");
// declaring arrays which contain lowercase, uppercase, numbers, and symbols.
var passwordLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var passwordUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var passwordNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var passwordSymbols = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '<', '.', '>', '/', '?']

// declaring variables for passwordlength, symbols, numbers, uppercase, and lowercase.
var passwordLength = "";
var symbols;
var numbers;
var upperCase;
var lowerCase;

// creating function GENERATE PASSWORD.
function generatePassword() {
    passwordLength = (prompt("How many characters would you like to have in your password?"));
    // asking for how many characters user want in password.
    if (passwordLength <= 8 || passwordLength >= 128) {
        alert("Your password must between 8 and 128 characters.");
        passwordLength = (prompt("How many characters would you like to have in your password?"))
    }

    // get booleans for all selection 
    symbols = confirm("Do you want any symbols in your password?");
    numbers = confirm("Do you want any numbers in your password");
    lowerCase = confirm("Do you want any lowercase in your password?");
    upperCase = confirm("do you want any uppercase in your password?");

    // if everything entered false it will ask all the questions again.
    if (symbols === false && numbers === false && lowerCase === false && upperCase === false) {
        prompt("You must choose atleast one out of all");
        symbols = prompt("Do you want any characters in your password?");
        numbers = prompt("Do you want any numbers in your password");
        lowerCase = prompt("Do you want any lowercase in your password?");
        upperCase = prompt("do you want any uppercase in your password?");
    }

    // create the password based on selct - hi level
    // find out how many characters we need (passwordLengther)
    // group the valid character together (array 1 big array)
    var validCharacters = []

    if (symbols === true) {
        validCharacters = validCharacters.concat(passwordSymbols)
    }
    if (numbers === true) {
        validCharacters = validCharacters.concat(passwordNumbers)
    }
    if (lowerCase === true) {
        validCharacters = validCharacters.concat(passwordLowerCase)
    }
    if (upperCase === true) {
        validCharacters = validCharacters.concat(passwordUpperCase)
    }
    // sanity check
    console.log(validCharacters)

    // for each character needed ( for each passwordLenght)
    var randomPassword = ""
    for (var i = 0; i < passwordLength; i++) {
        // -- get a randomNumber look up how to get a randomnumber
        var randomNumber = Math.floor(Math.random() * validCharacters.length);
        // sanity check
        console.log(randomNumber);

        // -- use that random number to get a random selection from validChar ex var Letter = validCharacter[randomeNumber];
        randomPassword = randomPassword + validCharacters[randomNumber];
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