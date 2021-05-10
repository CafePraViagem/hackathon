let userName = formUserContact.name.value;
let userBirthdate = formUserContact.nasc.value;
let userCity = formUserContact.city.valeu;
let userEmail  = formUserContact.email.value;
let userPhone = formUserContact.phone.value;
let userMessage = formUserContact.message.value;

function formValidation() {
  
  if (userMessage.length > 1 && userMessage.length <= 2000) {
    if (userMessage > 2000) {
      formUserContact.message.focus();
      clickButtonOutputChangeClass(outputMessage, ".output-message-off", "output-message-on");
    }
  }

  var inputConfirmePhoneNumber = document.querySelector("#userPhone");

  inputConfirmePhoneNumber = inputConfirmePhoneNumber.value;


  if (inputConfirmePhoneNumber.length > 9 || inputConfirmePhoneNumber.length <= 11 && isNaN(!inputConfirmePhoneNumber)) {

    return true;

  } else {

    formUserContact.phone.focus();
    clickButtonOutputChangeClass(outputPhone, "output-phone-off", "output-phone-on");
    console.log(inputConfirmePhoneNumber);
  }

}

function clickButtonOutputChangeClass(tagId, outputOff, outputOn){

  tagId.classList.remove(outputOff);
  tagId.classList.add(outputOn);

  setTimeout(() => {
    tagId.classList.add(outputOff);
  }, 5000);

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

  const accentuation = '[àÀáÁãÃâÂäÄèÈéÉêÊëËìÌíÍîÎïÏòÒóÓõÕôÔöÖùÙúÚûÛüÜçÇñÑýÝÿŸ]'

  if (charLetter.match(patternLetter) || charLetter.match(space) || charLetter.match(accentuation)) {
    return true;

  } else {

    formUserContact.name.focus();
    clickButtonOutputChangeClass(outputName, "output-name-off", "output-name-on");
  }
}

let userCityId = document.querySelector("#userCity");
userCityId.addEventListener("keypress", function(e){

  if (!checkLetterInputCity(e)) {
    e.preventDefault();
  }
  
});
function checkLetterInputCity(e) {

  const charLetter = String.fromCharCode(e.keyCode);

  const patternLetter = '[a-zA-z]';

  const space = " ";

  const accentuation = '[àÀáÁãÃâÂäÄèÈéÉêÊëËìÌíÍîÎïÏòÒóÓõÕôÔöÖùÙúÚûÛüÜçÇñÑýÝÿŸ]'

  if (charLetter.match(patternLetter) || charLetter.match(space) || charLetter.match(accentuation)) {
    return true;

  } else {
    
    formUserContact.city.focus();
    clickButtonOutputChangeClass(outputCity, "output-city-off", "output-city-on");
  }
}

function checkDoNotLiveInBrazil () {

  let doNotLiveInBrazil = document.querySelector("#doNotLiveInBrazil");

if (doNotLiveInBrazil == checked) {

  document.querySelector("#userCity").disabled = true;    
  document.querySelector("#userState").disabled = true;
  document.querySelector("#userPhone").disabled = true;
}
}


let buttonSubmit = document.querySelector(".send-form");
buttonSubmit.onclick = formValidation;

// Enviar para fomulário;
//let userNameNoSpace = userName.trim();