function formValidation() {
  
  let userName = formUserContact.name.value;
  let userBirthdate = formUserContact.nasc.value;
  let userCitie = formUserContact.city.valeu;
  let userState = formUserContact.state.value;
  let userMail  = formUserContact.email.value;
  let userPhoneNumber = formUserContact.phone.value;
  let optionUserMessage = formUserContact.question.value;
  let userMessage = formUserContact.message.value;
}

let sendForm = document.querySelector(".send-form");
sendForm.onclick = formValidation;