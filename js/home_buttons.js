function clickButtonProfile(classList) {
    adventureprofile.classList.remove(".classList");
    return classList;
}

let buttonAdvetureProfile = document.querySelector(".button-type-trip-adventure");

let adventureprofile = document.querySelector(".adventure-profile-off")

buttonAdvetureProfile.onclick = clickButtonProfile(".adventure-profile-off");

