// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  hornSelect.addEventListener("change", updateHorn);

  button.addEventListener("click", playSound);

  volumeSlider.addEventListener("input", updateVolume);

}

///// constant variables /////
const image = document.querySelector("img");

const audio = document.querySelector("audio");

const hornSelect = document.getElementById("horn-select");

const button = document.querySelector("button");

const volumeSlider = document.getElementById("volume");

const volumeIcon = document.getElementById("volume-controls").querySelector('img');

const jsConfetti = new JSConfetti();

// variable to hold current horn selection
let currentHorn;


// function called when a new horn is selected
// loads new horns image and audio file
function updateHorn(){
  // get new horn selection
  currentHorn = hornSelect.value;
  // load correct image
  image.src = "/sp24-cse110-lab5/assets/images/" + currentHorn + ".svg";
  // load correct audio file
  audio.src = "/sp24-cse110-lab5/assets/audio/" + currentHorn + ".mp3";

}

// function called when the button is clicked
// plays correct audio file, adds confetti if currentHorn == party horn
function playSound(){
  if (currentHorn == "party-horn"){
    jsConfetti.addConfetti();
  }
  audio.play();
}


function updateVolume(){
  let currentVol = volumeSlider.value;
  audio.volume = currentVol / 100;
  if (currentVol == 0){
    volumeIcon.src = "/sp24-cse110-lab5/assets/icons/volume-level-0.svg";
    volumeIcont.alt = "Volume level 0";
  }
  else if (currentVol < 33){
    volumeIcon.src = "/sp24-cse110-lab5/assets/icons/volume-level-1.svg";
    volumeIcont.alt = "Volume level 1";
  }
  else if (currentVol < 67){
    volumeIcon.src = "/sp24-cse110-lab5/assets/icons/volume-level-2.svg";
    volumeIcont.alt = "Volume level 2";
  }
  else {
    volumeIcon.src = "/sp24-cse110-lab5/assets/icons/volume-level-3.svg";
    volumeIcont.alt = "Volume level 3";
  }

}




