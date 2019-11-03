var result = document.getElementById('display');
var generate = document.getElementById('generate');
var clipboard = document.getElementById('clipboard');


function verify(length, useLower,useUpper, useNumbers, useSymbols)

var length = parseInt(prompt("To ensure security, choose a character amount between 8 & 128"));{
    if(length > 7 && length < 129) {
    
         var useLower = confirm("Would you like to use lowercase letters?");
         var useUpper = confirm("Would you like to use uppercase letters?");
         var useNumbers = confirm("Would you like to use numbers?");
         var useSymbols = confirm("Would you like to use symbols?");
        
    } else if (isNaN(length)) {
        alert("Please enter a number between 8 and 128.");
        verify();
    } else {
        alert("Please enter a number between 8 and 128.");
        verify();
    }
    if (useLower == false && useUpper == false && useNumbers == false && useSymbols == false) {
        alert("Please choose at least one character type.");
        verify();
    }
    console.log(length);
    console.log(useLower);
    console.log(useNumbers);
    console.log(useSymbols);
    console.log(useUpper);
}



//generate random password
function generate(){

 

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}