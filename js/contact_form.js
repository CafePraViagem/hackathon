let userName = formUserContact.name.value;
let userBirthdate = formUserContact.nasc.value;
let userCity = formUserContact.city.valeu;
let userEmail = formUserContact.email.value;
let userPhone = formUserContact.phone.value;
let userMessage = formUserContact.message.value;

// document.getElementById('userPhone').addEventListener('keydown', function () {
//   const phone = document.getElementById('userPhone');
//   const re = /^\(?\d{2}\)?[-. ]?\d{5}[-. ]?\d{4}$/;

//   if (!re.test(phone.value)) {
//     phone.classList.add('is-invalid')
//   } else {
//     phone.classList.remove('is-invalid')
//   }
// });

function formValidation() {

    if (userMessage.length > 1 && userMessage.length <= 2000) {
      if (userMessage > 2000) {
        formUserContact.message.focus();
        clickButtonOutputChangeClass(outputMessage, ".output-message-off", "output-message-on");
      }
    }
  }

function clickButtonOutputChangeClass(tagId, outputOff, outputOn) {

  tagId.classList.remove(outputOff);
  tagId.classList.add(outputOn);

  setTimeout(() => {
    tagId.classList.add(outputOff);
  }, 5000);

}

let userNameId = document.querySelector("#userName");
userNameId.addEventListener("keypress", function (e) {

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
userCityId.addEventListener("keypress", function (e) {

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

var checkboxNotBrazil = document.querySelector("#doNotLiveInBrazil");
checkboxNotBrazil.onchange = function () {

  if (checkboxNotBrazil.checked) {

    var userCity = document.querySelector("#userCity");
    var userState = document.querySelector("#userState");
    var userPhone = document.querySelector("#userPhone");
    var outputUserPhone = document.querySelector("#outputPhone");

    userCity.disabled = true;
    userPhone.disabled = true;
    userState.disabled = true;

    if (userCity.disabled && userPhone.disabled && userState.disabled) {

      userCity.required = false;
      userPhone.required = false;
      userState.required = false;
      outputUserPhone.style.color = "white";

    } else {

      userCity.required = true;
      userPhone.required = true;
      userState.required = true;

    }

  } else {

    document.querySelector("#userPhone").disabled = false;
  }
};

//  ----> SHOW MODAL
function startModal(modalID) {
  const modalBox = document.getElementById(modalID);
  var nome = $("#nome").val();
  $("#conteudo").empty();
  $("#conteudo").append("Nome: " + nome);

  modalBox.classList.add("showModal");
  modalBox.addEventListener("click", (event) => {
    if (event.target.id == modalID || event.target.id == "close") {
      modalBox.classList.remove("showModal");
      window.location.reload();
    }
  });
}

document.getElementById('formContact').addEventListener('submit', function (event) {
  event.preventDefault()
  startModal("modalResult")
})