var result = document.getElementById("display");
var generate = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");


 length = parseInt(prompt("To ensure security, choose a character amount between 8 & 128"));{
    if(length > 7 && length < 129) {
      
           var useLower 
         if (confirm("Would you like to use lowercase letters?")==true)
            {
                useLower.value = "abcdefghijklmnopqrstuvwxyz";
            } 
            

         
         confirm("Would you like to use uppercase letters?");{
            if(useUpper = ("ABCDEFGHIJKLMNOPQRSTUVWZYZ")){
                
         }}
        
          
         confirm("Would you like to use numbers?");{
            if(useNumbers = ("1234567890"));{
         }}
        
          
         confirm("Would you like to use symbols?");{
            if(useSymbols = ("!@#$%^&*()_+"));{
         }}
            
        
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

 