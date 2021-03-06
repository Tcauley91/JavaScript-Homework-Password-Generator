// HTML DOMS

var passwordEl = document.getElementById("display");
var generateEl = document.getElementById("generate");
var userGeneratedPW;

// User password input prompts

onload(){
 var length = parseInt(prompt("To ensure security, choose a character amount between 8 & 128"));
    if(length > 7 && length < 129){
      
         var useLower = confirm("Would you like to use lowercase letters?");
        
         var useUpper = confirm(" Would you like to use uppercase letters?");
         
         var useNumbers = confirm("Would you like to use numbers?");
        
         var useSymbols = confirm("Would you like to use symbols?");
        
        
    } else if (isNaN(length)){
        alert("Please enter a number between 8 and 128.");
        
    
    } else {
        alert("Please enter a number between 8 and 128.");
       
    }
    
      if (useLower == false && useUpper == false && useNumbers == false && useSymbols == false) {
        alert("Please choose at least one character type.")
      }

      generateEl.addEventListener("click", function(){
        // generateEl = length.value;

        generatePassword(length, useLower, useUpper, useNumbers, useSymbols);
    
    
    

        // this function takes the user imputs and places them in an array to form a random password
    function generatePassword(length, lower, upper, number, symbol){
        userGeneratedPW = '';
        var charCount = lower + upper + number + symbol;
        var charArry = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

        if(charCount == 0){
            return "";
        }
 
        for(var b = 0; b < length; b += charCount){
            charArry.forEach(type => {
                var funcName = Object.keys(type)[0];

                userGeneratedPW += randomFunc[funcName]();
            });
        }

        var finalPW = userGeneratedPW.slice(0, length);
        // return finalPW;

        console.log(finalPW);
        console.log(length);

        passwordEl.textContent = finalPW;

        }})


        var randomFunc = {
            lower: randomLower,
            upper: randomUpper,
            number: randomNumber,
            symbol: randomSymbol,
        }

        function randomLower(){
            return String.fromCharCode(Math.floor(Math.random()*26) +65);
        }

        function randomUpper(){
            return String.fromCharCode(Math.floor(Math.random()*26) +97);
        }

        function randomNumber(){
            return String.fromCharCode(Math.floor(Math.random()*10) +48);
        }

        function randomSymbol(){
            var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
            return symbols[Math.floor(Math.random() *symbols.length)];

        }

// Copy Generated password to clipboard function

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("display");
    
    console.log(copyText);
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Your password " + copyText.value + " has been copied to your clipboard!");
  }
};
  