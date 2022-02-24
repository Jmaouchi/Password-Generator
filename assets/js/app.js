var password = document.getElementById('password');
var generateBtn = document.getElementById('generate');

function generatedPassword (hasLower, hasUpper, hasNumber, hasSymbole, length) {

  // setting up an emty string to add the values to it
  let box = '';

  // reload the page after user dind't choose the right length
  if(length < 8 || length > 128){
    alert('please choose the right number');
    window.location.reload();
  }

  else{
    
  // Get random lower
  var lower = 'qwertyuiopasdfghjklzxcvbnm';
  hasLower = String.fromCharCode(Math.floor(Math.random() * lower.length) + 97 );
  box += hasLower;


  // Get random upper
  var upper = 'QWERTYUIOPASDFGHJKLMNBVCXZ';
  hasUpper = String.fromCharCode(Math.floor(Math.random() * upper.length) + 97 ); // used the same number form the chartCode and converted it to an upperCase on line 16
  // same then doing string.fromChartCode(Math.floor(Math.random()* upper.length) + 65) 
  hasUpper = hasUpper.toUpperCase();
  box += hasUpper;
  console.log (box);


  //get random number
  var number = '0123456789';
  hasNumber = Math.floor(Math.random() * number.length);
  box += hasNumber;

  //Get random symbole 
  var symboles = '!@#$%^&*()_+?><';
  hasSymbole = symboles[Math.floor(Math.random() * symboles.length)];
  box += hasSymbole;
  console.log (box);

  // set a result emty string to add the values until we hit the length 
  let result = '';
  while(result.length < length){
    
    let randomIndex = Math.floor(Math.random() * result.length);
    let newRandom = box.charAt(randomIndex);
     result += newRandom //box.charAt(Math.floor(Math.random() * length));
  }
  
 console.log (result);
 return result;
}
}
 


generateBtn.addEventListener('click', function(){
  var length = prompt('please try choose a number between 8 and 128');
  var hasLower = confirm ('Do you want to include a lower case letter?');
  var hasUpper = confirm ('Do you want to include a lower case letter?')
  var hasSymbole = confirm ('Do you want to include a lower case letter?')
  var hasNumber = confirm ('Do you want to include a lower case letter?')

  pw = generatedPassword(hasLower, hasUpper, hasNumber, hasSymbole, length);
  password.textContent = pw;
});
