function clickButtonTypeTripChangeClass(tagId, profileOff, profileOn){
    console.log(tagId.classList);
    tagId.classList.remove(profileOff);
    tagId.classList.add(profileOn);
}

let buttonTypeTripAdventurous = document.querySelector(".button-type-trip-adventure");

buttonTypeTripAdventurous.addEventListener('click', function() {

    let divTag = document.querySelector('#adventurous');

    clickButtonTypeTripChangeClass(divTag, 'adventurous-profile-off', 'adventurous-profile-on');

});

let buttonTypeTripYoung = document.querySelector(".button-type-trip-young");

buttonTypeTripYoung.addEventListener('click', function() {

    let divTag = document.querySelector('#young');

    clickButtonTypeTripChangeClass(divTag, 'young-profile-off', 'young-profile-on');
    
});
