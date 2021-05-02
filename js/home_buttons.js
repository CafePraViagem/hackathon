function clickButtonTypeTrip(profileOn, profileOff) {

    let divProfileOn = document.getElementsByClassName(`${profileOn}`);
    divProfileOn.classList.remove(profileOff);

    console.log(buttonTypeTripAdventure.value);
    
    /* let divProfileOn = `<div class="${profileOn}>`;
    let divProfileOff = `<div class="${profileOff}">`
    divProfileOn.classList.remove(divProfileOff);

    console.log(buttonTypeTripAdventure.value); */
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTrip("adventure-profile-on",".adventure-profile-off");



/* function clickButtonTypeTripAdventure() {

    let divAdventureProfileOn = document.querySelector(".adventure-profile-on");
    divAdventureProfileOn.classList.remove("adventure-profile-off");

    console.log(buttonTypeTripAdventure.value);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTripAdventure; */
