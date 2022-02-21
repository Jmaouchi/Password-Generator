// Assignment Code
var generateBtn = document.querySelector("#generate");


//creat a generatPassword function
function generatePassword (passwordArray, password) {

  var passwordArray = [];
  var array = '';
   
  // check the length
  var length = parseInt(prompt('choose the length of your password between 8 and 128'));
  while(true){
    if(length >= 8 && length <=128 ){
      alert ('you choosed ' +  length)
    }
    else{
    alert ('please choose the right number')
    break;
   }


  
  // see if they want lower case
  var hasLower = confirm('do you want to include a lower case')

  // see if they want to include an upper case
  var hasUpper = confirm('do you want to include a upper case')
    
  // see if they want to inclkude a number 
  var number = confirm('do you want to includ a number')

}

var passwordArray = [];
  if(hasLower){
    passwordArray = passwordArray.concat(String.fromCharCode(Math.floor (Math.random() * 26) + 97));
  }

  if (hasUpper){
    passwordArray = passwordArray.concat(getRandomUpper());
  }

  if (number){
    passwordArray = passwordArray.concat(number());
  }
  }


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function getRandomLower(){
  return String.fromCharCode(Math.floor (Math.random() * 26) + 97);
}

 function getRandomUpper(){
  return String.fromCharCode(math.floor (math.random() * 26) + 48);
}

function number(){
  return String.fromCharCode(math.floor (math.random() * 10) +48);
}

function symbols(){
  var symbols = '#%^&*()(*&^%)'
  return symbols[math.floor (math.random() * symbols.length)];
} 