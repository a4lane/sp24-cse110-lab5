// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", utter);


}

const synth = window.speechSynthesis;

const voiceSelect = document.getElementById("voice-select");

const button = document.querySelector("button");

const image = document.querySelector("img");

let voices = [];



function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = voices[i].name + " (" + voices[i].lang + ")";

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("lang", voices[i].lang);
    option.setAttribute("value", voices[i].name);
    voiceSelect.appendChild(option);
  }
}


function utter(){

  let script = document.querySelector("textarea").value;

  let speech = new SpeechSynthesisUtterance(script);

  let selectedVoice = voiceSelect.value;


  for (let i = 0; i < voices.length; i++){
    if (voices[i].name == selectedVoice){
      speech.voice = voices[i];
      break;
    }
  }

  

  synth.speak(speech);
  image.src = "assets/images/smiling-open.png";
  
  speech.onend = function() {
    image.src = "assets/images/smiling.png";
  }

}
