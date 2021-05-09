let userName = formUserContact.name.value;
let userBirthdate = formUserContact.nasc.value;
let userCity = formUserContact.city.valeu;
let userEmail  = formUserContact.email.value;
let userPhone = formUserContact.phone.value;
let userMessage = formUserContact.message.value;

/* let doNotLiveInBrazil = document.querySelector("#doNotLiveInBrazil");

if (doNotLiveInBrazil.value == checked) {

  document.querySelector("#user-city").disabled = true;    
  document.querySelector("#state").disabled = true;
} */

function formValidation() {

  if (userName == "") {
    formUserContact.name.focus();
    clickButtonOutputChangeClass(outputName, "output-name-off", "output-name-on");

  }

  if (userBirthdate.length < 9){
    formUserContact.nasc.focus();
    clickButtonOutputChangeClass(outputNasc, "output-nasc-off", "output-nasc-on");
  } 
  
  if (userEmail.indexOf("@") == -1 && userEmail.indexOf(".com") == -1) {
    formUserContact.email.focus();
    clickButtonOutputChangeClass(outputEmail, "output-email-off", "output-email-on");
  }

  if (userPhoneId.length > 9 && userPhoneId.length < 20) {
    formUserContact.phone.focus();
    clickButtonOutputChangeClass(outputPhone, ".output-phone-off", "output-phone-on");
  } 
  
  if (userMessage.length > 1 && userMessage.length <= 2000) {
    if (userMessage > 2000) {
      formUserContact.message.focus();
      clickButtonOutputChangeClass(outputMessage, ".output-message-off", "output-message-on");
    }
    
  }

}

function clickButtonOutputChangeClass(tagId, outputOff, outputOn){

  tagId.classList.remove(outputOff);
  tagId.classList.add(outputOn);

  setTimeout(() => {
    tagId.classList.add(outputOff);
  }, 3000);

}

let userNameId = document.querySelector("#userName");
userNameId.addEventListener("keypress", function(e){

  if (!checkLetterInputName(e)) {
    e.preventDefault();
  }
  
});
function checkLetterInputName(e) {

  const charLetter = String.fromCharCode(e.keyCode);

  const patternLetter = '[a-zA-z]';

  const space = ' '

  const accentuation = '[áÁãÃéÉíÍóÓõÕ]'

  if (charLetter.match(patternLetter) || charLetter.match(space) || charLetter.match(accentuation)) {
    return true;

  } else {

    formUserContact.name.focus();
    clickButtonOutputChangeClass(outputName, "output-name-off", "output-name-on");
  }
}

let userCityId = document.querySelector("#user-city");
userCityId.addEventListener("keypress", function(e){

  if (!checkLetterInputCity(e)) {
    e.preventDefault();
  }
  
});
function checkLetterInputCity(e) {

  const charLetter = String.fromCharCode(e.keyCode);

  const patternLetter = '[a-zA-z]';

  const space = " ";

  const accentuation = '[áÁãÃéÉíÍóÓõÕ]'

  if (charLetter.match(patternLetter) || charLetter.match(space) || charLetter.match(accentuation)) {
    return true;

  } else {
    
    formUserContact.city.focus();
    clickButtonOutputChangeClass(outputCity, "output-city-off", "output-city-on");
  }
}

let userPhoneId = String(document.querySelector("#userPhone").value);
userPhoneId.addEventListener("keypress", function(e){

  if (!checkNumberPhoneUser(e)) {
    e.preventDefault();
  }
  
});
function checkNumberPhoneUser(e) {

  const charNumber = String.fromCharCode(e.keyCode);

  const patternNumber = '^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$';

  if (charNumber.match(patternNumber)) {
    return true;

  }
}

let sendForm = document.querySelector(".send-form");
sendForm.onclick = formValidation;

// Enviar para fomulário;
//let userNameNoSpace = userName.trim();