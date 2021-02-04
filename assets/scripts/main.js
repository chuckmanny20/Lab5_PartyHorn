// main.js

// TODO

// variables for volume-slider and volume-number elements
var volume_number = document.getElementById("volume-number");
var volume_slider = document.getElementById("volume-slider");

// volume image
var volume_image = document.getElementById("volume-image");

// sound image
var sound_image = document.getElementById("sound-image");

// audio element
var horn_audio = document.getElementById("horn-sound");

// the three radio inputs
var air_horn_radio = document.getElementById("radio-air-horn");
var car_horn_radio = document.getElementById("radio-car-horn");
var party_horn_radio = document.getElementById("radio-party-horn");

// input event listeners for when value is changed via slider or number
volume_number.oninput = updateSlider;
volume_slider.oninput = updateNumber;

// input event when radio is changed
air_horn_radio.addEventListener('change', updateAir);
car_horn_radio.addEventListener('change', updateCar);
party_horn_radio.addEventListener('change', updateParty);

// button listener
var honk_button = document.getElementById("honk-btn");
honk_button.onclick = playSound;

function updateSlider(e1) {
    // update values of both
    volume_slider.value = volume_number.value;
    volume_number.value = volume_slider.value;

    // update volume of audio tag (between 0 and 1)
    horn_audio.volume = e1.target.value / 100;

    // 3 bars
    if(e1.target.value > 66) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honk_button.disabled = false;
    // 2 bars
    } else if(e1.target.value > 33) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honk_button.disabled = false;
    // 1 bar
    } else if(e1.target.value > 0) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honk_button.disabled = false;
    // disable button
    } else {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honk_button.disabled = true;
    }
}

function updateNumber(e2) {
    // update values of both
    volume_number.value = volume_slider.value;
    volume_slider.value = volume_number.value;

    // update volume of audio tag (between 0 and 1)
    horn_audio.volume = e2.target.value / 100;

    // 3 bars
    if(e2.target.value > 66) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
        honk_button.disabled = false;
    // 2 bars
    } else if(e2.target.value > 33) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
        honk_button.disabled = false;
    // 1 bar
    } else if(e2.target.value > 0) {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
        honk_button.disabled = false;
    // disable button
    } else {
        volume_image.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
        honk_button.disabled = true;
    }
}

// when specific radio clicked, change sound played and sound image
function updateAir() {
    horn_audio.setAttribute("src", "./assets/media/audio/air-horn.mp3");
    sound_image.setAttribute("src", "./assets/media/images/air-horn.svg");
}

function updateCar() {
    horn_audio.setAttribute("src", "./assets/media/audio/car-horn.mp3");
    sound_image.setAttribute("src", "./assets/media/images/car.svg");
}

function updateParty() {
    horn_audio.setAttribute("src", "./assets/media/audio/party-horn.mp3");
    sound_image.setAttribute("src", "./assets/media/images/party-horn.svg");
}

// play audio
function playSound() {
    horn_audio.play();
    // this prevents submit from refreshing page
    return false;
}