var password = document.getElementById('password');
var generateBtn = document.getElementById('generate');
var headingTwo = document.querySelector('.heading-two');

function generatedPassword (hasLowerChart, hasUpperChart, hasNumberChart, hasSymboleChart, length) {

  // Get random lower
  var lower = 'qwertyuiopasdfghjklzxcvbnm';

  //get random number
  var number = '0123456789';

  //Get random symbole 
  var symboles = '!@#$%^&*()_<>?';


  // set a result emty string to add the values until we will make it to  the user length 
  let result = '';
  while(result.length < length){
    
    // checking if user choose to add a symbole chart
    if( hasSymboleChart){
      var hasSymbole = symboles[Math.floor(Math.random() * symboles.length)];
      result += hasSymbole;
      if(result.length === length){
        break;
      }
    }
   
    // checking if user choose to add a  lowerCase chart
   if(hasLowerChart){
    var hasLower = String.fromCharCode(Math.floor(Math.random() * lower.length) + 97 );
    result += hasLower;
    if(result.length === length){
      break
    }
   } 

   // checking if user choose to add a  upperCase chart
   if(hasUpperChart){   
    var hasUpper = String.fromCharCode(Math.floor(Math.random() * lower.length) + 97 ); // used the same number form the chartCode and converted it to an upperCase on line 16
    // same then doing string.fromChartCode(Math.floor(Math.random()* upper.length) + 65) 
    hasUpper = hasUpper.toUpperCase();
    result += hasUpper;
    if(result.length === length){
      break;
    }
   } 

   // checking if user choose to add a number chart
   if(hasNumberChart){
    var hasNumber = Math.floor(Math.random() * number.length);
    result += hasNumber;
    //if result will make it to the user length, then stop are while loop and stop adding chars
    if(result.length === length){
      break
    }
   } 

  }
  
 console.log (result);
 return result; //this will return the reslut variable that we created and we can use it to add
}
 

// adding a listener to the button and that will take are generatePassword function 
generateBtn.addEventListener('click', function(){
  var length = prompt('please try choose a number between 8 and 128');
  if(length < 8 || length > 128){
    var lengthCheck =  alert('please choose the right length between 8 and 128');
    password.style.backgroundColor = 'red';
    headingTwo.textContent = 'Add Correct Length!';
    return lengthCheck;
  }

  var hasLowerChart = confirm ('Do you want to include a lower case letter?');
  var hasUpperChart = confirm ('Do you want to include a upper case letter?')
  var hasSymboleChart = confirm ('Do you want to include a s symbole?')
  var hasNumberChart = confirm ('Do you want to include a number?')

  pw = generatedPassword(hasLowerChart, hasUpperChart,  hasSymboleChart,hasNumberChart, length);
  password.textContent = pw;
});
