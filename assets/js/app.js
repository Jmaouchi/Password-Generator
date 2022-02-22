// Assignment Code
document.getElementById(#generate).addEventListener('click', function (){
  var length = parseInt(prompt('choose the length of your passwrod between 8 and 128'));
  var hasLower = prompt('do you want lower case letters?');
  var hasUpper = prompt('do you want lower case letters?');
  var hasNumber = prompt('do you want lower case letters?');
  var hasSymbole = prompt('do you want lower case letters?');
  // proccess user input or user desire 
  var pw = generatePassword(length, hasLower, hasUpper, hasSymbole, hasNumber);
  // returne output
  var password = document.getElementById('password');
  password.innerHTML = pw;
})

// Add event listener to generate button
function generatePassword(length, hasLower, hasUpper, hasSymbole, hasNumber){
  
}
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}



// function getRandomLower(){
//   return String.fromCharCode(Math.floor (Math.random() * 26) + 97);
// }

//  function getRandomUpper(){
//   return String.fromCharCode(math.floor (math.random() * 26) + 48);
// }

// function number(){
//   return String.fromCharCode(math.floor (math.random() * 10) +48);
// } 

// function symbols(){
//   var symbols = '#%^&*()(*&^%)'
//   return symbols[math.floor (math.random() * symbols.length)];
// } 