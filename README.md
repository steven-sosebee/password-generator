# UNC Coding Boot Camp Week 2 Homework - Password Generator

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

### Technical Acceptance Criteria: 40%

- [*] Satisfies all of the preceding acceptance criteria plus the following:

- [*] The homework should not produce any errors in the console when you inspect it using Chrome DevTools.



### Deployment: 32%

- [x] Application deployed at live URL: [Deployed Version](https://steven-sosebee.github.io/password-generator/) 

- [x] Application loads with no errors.

- [x] Application GitHub URL submitted: [Deployed Version](https://steven-sosebee.github.io/password-generator/)

- [x] GitHub repository that contains application code: [GitHub repository](https://github.com/steven-sosebee/password-generator)

### Application Quality: 15%

- [x] Application user experience is intuitive and easy to navigate.

- [x] Application user interface style is clean and polished.
    * Updated mobile screen interface.
    * Added functionality to options pop-up window to close window.

- [x] Application resembles the mock-up functionality provided in the homework instructions.

![Interface](./Assets/interface.png)


### Repository Quality: 13%

- [x] Repository has a unique name: [Password Generator](https://github.com/steven-sosebee/password-generator)

- [x] Repository follows best practices for file structure and naming conventions.

- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
    * Semantic element tags used

- [x] Repository contains multiple descriptive commit messages.

- [x] Repository contains quality readme file with description, screenshot, and link to deployed application.
![Interface](./assets/interface.png)
## Review

You are required to submit the following for review:

- [x] The URL of the deployed application.

[Deployed Version](https://steven-sosebee.github.io/password-generator/)


- [x] The URL of the GitHub repository, with a unique name and a readme describing the project.

[GitHub repository](https://github.com/steven-sosebee/password-generator)

### References:
[Random Password Generator](https://w3collective.com/random-password-generator-javascript/)

[Create Pop-up Form with CSS](https://www.w3schools.com/howto/howto_js_popup_form.asp)

[Getting HTML Form Values](https://stackoverflow.com/questions/3547035/javascript-getting-html-form-values/41262933)

Code Highlights:
```
// Setting character lists of letters, numbers, and symbols

const letters= "abcdefghijklmnopqrstuvwxyz"
const Uletters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers= "0123456789"
const symbols= "!@#$%^&*()"
```
Javascript:
```
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
```

Form inputs from HTML:
```
<form action="javascript:submitform()" id="options">
              <question>
                <label for="length">Password length:</label>
                <input type="number" name="length" id="frm-length" value="16" min="8" max="128"/>
              </question>
              <question>
                <label for="uppper">Include upper case: </label>
                <input type="checkbox" name="upper" id="frm-upper" checked/>
              </question>
              <question >
                <label for="lower">Include lower case: </label>
                <input type="checkbox" name="lower" id="frm-lower" checked/>
              </question>
              <question >
                <label for="symbols">Include symbols: </label>
                <input type="checkbox" name="symbols" id="frm-symbols" checked/>
              </question>
              <question >
                <label for="numbers">Include numbers: </label>
                <input type="checkbox" name="numbers" id="frm-numbers" checked/>
              </question>
              <question>
                <button type="button" name="submit" id="frm-submit" onclick="generatePassword()">Submit</button>              
              </question>
              <question>
                <button type="button" name="close" id="frm-close" onclick="closeForm()">Close</button>
              </question>
            </form>
```

Creating the Password:

```
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
  ```
