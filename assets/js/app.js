// Assignment Code
document.getElementById('generate').addEventListener('click', function (){
  var length = parseInt(prompt('choose the length of your passwrod between 8 and 128'));
  var hasLower = prompt('do you want lower case letters?');
  var hasUpper = prompt('do you want lower case letters?');
  var hasNumber = prompt('do you want lower case letters?');
  var hasSymbole = prompt('do you want lower case letters?');
  // proccess user input or user desire 
  var pw = generatePassword(length, hasLower, hasUpper, hasSymbole, hasNumber);
  // returne output
  document.getElementById('password').innerHTML = pw;

})

// Add event listener to generate button
function generatePassword(length, hasLower, hasUpper, hasSymbole, hasNumber){
  if (length >= 128 && length <= 8){
  alert('length should be at less than 128 and greater than 8');
  return
  } 

  let pool = '';

  if(hasLower == 'yes' || hasLower == 'YES'){
    let lowerChars = 'qwertyuipoasdfghjklmnbvczx'
    pool += lowerChars;  //the += will add the value on the right to the variable on the left
  }

  if(hasUpper ==  'yes'|| hasUpper == 'YES'){
    let upperChars = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    pool += upperChars;  //the += will add the value on the right to the variable on the left
  }

  if(hasNumber ==  'yes' || hasNumber == 'YES'){
    let numberChars = '0123456789'
    pool += numberChars;  //the += will add the value on the right to the variable on the left
  }

  if(hasSymbole ==  'yes' || hasNumber == 'YES'){
    let lowerChars = '!@#$%^&*()_+?><'
    pool += lowerChars;  //the += will add the value on the right to the variable on the left
  }

  let result = "";
  for(var i =0 ; i < length; i++){
  let min = result.length;
  let max = pool.length;
  let randomIndex = Math.floor(Math.random() * (max - min) + min)
     let newChar = pool.charAt(randomIndex);
     result += newChar;
}

return result
}