/* click button home */

function clickButtonTypeTrip(idDiv, profileOn, profileOff) {

    let tagDivProfile = document.querySelector(idDiv);
    console.log(idDiv);
    console.log(tagDivProfile);

    let divProfileRemove = tagDivProfile.classList.contains("Lorem ipsum");
    console.log(divProfileRemove);

    

    divProfileRemove.classList.add(profileOn);
    console.log(tagDivProfile);
    
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTrip("#adventure", ".adventure-profile-on", ".adventure-profile-off");

/* buttonTypeTripAdventure.onclick = clickButtonTypeTrip(".adventure-profile-on",".adventure-profile-off");
 */


/* function clickButtonTypeTripAdventure() {

    let divAdventureProfileOn = document.querySelector(".adventure-profile-on");
    divAdventureProfileOn.classList.remove("adventure-profile-off");

    console.log(buttonTypeTripAdventure.value);
}

let buttonTypeTripAdventure = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventure.onclick = clickButtonTypeTripAdventure; */