function clickButtonTypeTripAdventure() {

    let divAdventureProfileOn = document.querySelector(".adventure-profile-on");
    divAdventureProfileOn.classList.remove("adventure-profile-off");

    console.log(buttonTypeTripAdventure.value);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTripAdventure;

/* function clickButtonTypeTripAdventure() {

    let divAdventureProfileOn = document.querySelector(".adventure-profile-on");
    divAdventureProfileOn.classList.remove("adventure-profile-off");

    console.log(buttonTypeTripAdventure.value);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTripAdventure; */
