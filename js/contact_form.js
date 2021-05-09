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

  const accentuation = '[àÀáÁãÃâÂäÄèÈéÉêÊëËìÌíÍîÎïÏòÒóÓõÕôÔöÖùÙúÚûÛüÜçÇñÑýÝÿŸ]'

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

  const accentuation = '[àÀáÁãÃâÂäÄèÈéÉêÊëËìÌíÍîÎïÏòÒóÓõÕôÔöÖùÙúÚûÛüÜçÇñÑýÝÿŸ]'

  if (charLetter.match(patternLetter) || charLetter.match(space) || charLetter.match(accentuation)) {
    return true;

  } else {
    
    formUserContact.city.focus();
    clickButtonOutputChangeClass(outputCity, "output-city-off", "output-city-on");
  }
}

function confirmPhoneNumber(phoneUser) {
  const atualText = phoneUser.value;
  const isPhoneNumber = atualText.length === 9;

  let correctText;
      
    if (isPhoneNumber) {

    } else {

    }

    phoneUser.value = correctText;
}

function noHyphen (phoneUser) {

  const atualText = phoneUser.value;

  const corresctText = atualText.replace(/\-/g, '');

  phoneUser.value = corresctText;
}



let sendForm = document.querySelector(".send-form");
sendForm.onclick = formValidation;

// Enviar para fomulário;
//let userNameNoSpace = userName.trim();