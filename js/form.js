let userName = formUserContact.name.value;
let userBirthdate = formUserContact.nasc.value;
let userCity = formUserContact.city.valeu;
let userState = formUserContact.state.value;
let userMail  = formUserContact.email.value;
let userPhone = formUserContact.phone.value;
let optionUserMessage = formUserContact.question.value;
let userMessage = formUserContact.message.value;


function checkLetterInInput(e) {
  
  if (!checkLetter(e)) {
    e.preventDefault();
  }
}; 

function checkNumberInInput(e) {
  
  if (!checkNumber(e)) {
    e.preventDefault();
  }
}

function checkLetter(e) {

  const charLetter = String.fromCharCode(e.keyCode);

  const patternLetter = '[a-zA-z]';

  const space = ' '

  if (charLetter.match(patternLetter) || charLetter.match(space)) {
    return true;

  } else {
    formUserContact.name.focus();
    clickButtonOutputChangeClass(outputName, "output-name-off", "output-name-on");
  }
}

function checkNumber(e) {

  const charNumber = String.fromCharCode(e.keyCode);

  const patternNumber = '[0-9]';

  const plus = '+'

  if (charNumber.match(patternNumber) || charNumber.match(plus)) {
    return true;

  } else {

    invalidationTentativeMessage;
    /* formUserContact.name.focus();
    clickButtonOutputChangeClass(outputName, "output-name-off", "output-name-on"); */
  }  
}

function invalidationTentativeMessage(inputName, outputId, outputOn, outputOff ){
  formUserContact.inputName.focus();
  clickButtonOutputChangeClass(outputId, outputOn , outputOff);
}

function formValidation() {

  /* if (userBirthdate < 9){
    formUserContact.nasc.focus();
    clickButtonOutputChangeClass(outputNasc, "output-narc-off", "output-narc-on");
    return false;

  } */ 

  /* if (userCity == "") {
    formUserContact.city.focus();
    clickButtonOutputChangeClass();
    return false;
    
  }  */

  /* if (userEmail.indexOf("@") == -1 ) {
    formUserContact.email.focus();
    clickButtonOutputChangeClass();
    return false;
    
  }  */

  /* if (userPhone.length < 9 ) {
    formUserContact.email.focus();
    clickButtonOutputChangeClass();
    return false;
    
  } */
}

function clickButtonOutputChangeClass(tagId, outputOff, outputOn){

  tagId.classList.remove(outputOff);
  tagId.classList.add(outputOn);

  setTimeout(() => {
    tagId.classList.add(outputOff);
  }, 3000);

}

let userNameId = document.querySelector("#userName");
userNameId.onkeypress = checkLetterInInput;

let sendForm = document.querySelector(".send-form");
sendForm.onclick = formValidation;

// Enviar para fomulário;
//let userNameNoSpace = userName.trim();