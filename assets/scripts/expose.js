// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const hornSelect = document.getElementById("horn-select");
  const audio = document.querySelector("audio");
  const image = document.querySelector("img");
  const soundButton = document.querySelector("button");
  const volumeIcon = document.querySelector("#volume-controls img");
  const volumeSlider = document.getElementById("volume");
  const jsConfetti = new JSConfetti();

  //console.log(audio)

  // Update audio and image src when horn type is selected
  hornSelect.addEventListener("change", () => {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === "air-horn") {
      audio.src = "assets/audio/air-horn.mp3";
      image.src = "assets/images/air-horn.svg";
    } else if (selectedHorn === "car-horn") {
      audio.src = "assets/audio/car-horn.mp3";
      image.src = "assets/images/car-horn.svg";
    } else if (selectedHorn === "party-horn") {
      audio.src = "assets/audio/party-horn.mp3";
      image.src = "assets/images/party-horn.svg";
    }
  });

  volumeSlider.addEventListener("input", () => {
    const volume = parseInt(volumeSlider.value);
  
    // Set audio element volume (0.0 to 1.0)
    audio.volume = volume / 100;
  
    // Update icon based on volume level
    if (volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });
  
  // Play the sound when the button is clicked
  soundButton.addEventListener("click", () => {

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
    if (audio.src) {
      audio.play();
    }
  });

}