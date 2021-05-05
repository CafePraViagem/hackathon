let box2 = document.getElementById("box2");

function showBox2() {
  if (numberOfTravelers !== 0) {
    box2.style.display = "inline";
  }
}

console.log(box2);

function showForms() {
  if (howManyDays !== 0) {
    document.getElementById("boxesID").style.display = "inline";
  }
}
