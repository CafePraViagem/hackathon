/* function clickButtonTypeTrip(profileOn) {

    let divProfileAdventure = document.getElementById("adventure");
    console.log(divProfileAdventure);

    divProfileAdventure.innerHTML = `<div id="adventure" class="${profileOn}">`;
    console.log(divProfileAdventure);
    
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTrip("adventure-profile-on"); */


/* function clickButtonTypeTripAdventure() {

    let divAdventureProfileOn = document.querySelector(".adventure-profile-on");
    divAdventureProfileOn.classList.remove("adventure-profile-off");

    console.log(buttonTypeTripAdventure.value);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTripAdventure; */

/* function clickButtonTypeTrip(profileOff){

    let divProfileOff = document.querySelector(`.${profileOff}`);
    console.log(divProfileOff);

    divProfileOff.classList.remove(profileOff);
    console.log(divProfileOff);
    
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTrip("adventure-profile-off"); */



function clickButtonTypeTripChangeClass(tagId, profileOff, profileOn){
    console.log(tagId.classList);
    tagId.classList.remove(profileOff);
    tagId.classList.add(profileOn);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.addEventListener('click', function() {
    let divTag = document.querySelector('#adventurous');

    clickButtonTypeTripChangeClass(divTag, 'adventurous-profile-off', 'adventurous-profile-on');
});

let buttonTypeTripYoung = document.querySelector(".button-type-trip-young");

buttonTypeTripYoung.addEventListener('click', function() {
    let divTag = document.querySelector('#young');

    clickButtonTypeTripChangeClass(divTag, 'young-profile-off', 'young-profile-on');
});
