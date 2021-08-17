// Setting character lists of letters, numbers, and symbols

const letters= "abcdefghijklmnopqrstuvwxyz"
const Uletters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers= "0123456789"
const symbols= "!@#$%^&*()"

// Identifying HTML elements to pull information into password generator

var frmInputs=document.getElementById("options").elements;
var generateBtn = document.querySelector("#generate");
var addLowerLetters = frmInputs["frm-lower"];
var addUpperLetters = frmInputs["frm-upper"];
var addNumbers = frmInputs["frm-numbers"];
var addSymbols = frmInputs["frm-symbols"];
var popUp = document.getElementById("frmPassword");
var passwordLength = frmInputs["frm-length"];
var passwordText = document.querySelector("#password");

var characters;

// Add event listener to generate button
generateBtn.addEventListener("click", passwordOptions);

// Write password to the #password input
function passwordOptions() {
  document.getElementById("generate").disabled = true;
  popUp.style.display= "block";
  
}

// Steps to generate the password.
function generatePassword(){  
  
  // defining variables to test if the required character sets are included in the final password
  var numbersIncluded
  var lettersIncluded
  var UlettersIncluded
  var symbolsIncluded

  // Clearing the password and character set variables to begin with a clean slate
  password ="";
  characters="";
  
  //test the password length and display an alert if it is outside of the parameters

  if (passwordLength.value<8 || passwordLength.value>128) {
    window.alert("Please select a password length between 8 and 128 characters");
    return;
  };

  // Creates the character set to include in the password generation.
  // Adds the appropropriate character const to the list of available characters.

  if (addLowerLetters.checked){characters += letters};
  if (addUpperLetters.checked){characters += Uletters};
  if (addNumbers.checked){characters += numbers};
  if (addSymbols.checked){characters += symbols};

  // uses math.random and charAt to choose a randome character for each position of the password
  for (i=0; i<passwordLength.value; i++){
    password= password += characters.charAt(Math.floor(Math.random()*characters.length));
  };
  
  // Tests that each character set is included in the final password
  for (i=0; i<numbers.length; i++){
    if(numbersIncluded){break;};
    numbersIncluded= password.includes(numbers.charAt(i));

  };
  
  for (i=0; i<letters.length; i++){
    if(lettersIncluded){break;};
    lettersIncluded= password.includes(letters.charAt(i));
  };
  
  for (i=0; i<Uletters.length; i++){
    if(UlettersIncluded){break;};
    UlettersIncluded= password.includes(Uletters.charAt(i));
  };
  
  for (i=0; i<symbols.length; i++){
    if(symbolsIncluded){break;};
    symbolsIncluded= password.includes(symbols.charAt(i));
  };
  
  // if(lettersIncluded === addLowerLetters.checked){ console.log("letters:true");} else{console.log("letters:false")}
  // if(UlettersIncluded === addUpperLetters.checked){ console.log("Uletters:true");} else{console.log("Uletters:false")}
  // if(symbolsIncluded === addSymbols.checked){ console.log("symbols:true");} else{console.log("symbols:false")}
  // if(numbersIncluded === addNumbers.checked){ console.log("numbers:true");} else{console.log("numbers:false")}    
  
  // Confirms that the password generated includes all the necessary character sets
  if( (lettersIncluded === addLowerLetters.checked) && 
      (UlettersIncluded === addUpperLetters.checked) && 
      (symbolsIncluded === addSymbols.checked) &&
      (numbersIncluded === addNumbers.checked))
    //if successful, password is printed on the page
    // { console.log(true);
    { passwordText.value = password;  
      popUp.style.display="none";
      document.getElementById("generate").disabled = false;
      return password;
    // if the password randomly generated fails to pass the tests, a new password is generated.
    } else {
      // console.log(false);
      generatePassword()};   
  
};

// Close input form

function closeForm(){
document.getElementById("formPassword").style.display="none";
document.getElementById("generate").disabled = false;
}