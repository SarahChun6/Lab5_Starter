// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = window.speechSynthesis.getVoices();
  
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
  
      // Build display name
      let label = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        label += " — DEFAULT";
      }
  
      option.textContent = label;
      option.value = index; // Use index to refer to the voice
      voiceSelect.appendChild(option);
    });
  }
  

  // Some browsers may not populate voices immediately
  speechSynthesis.onvoiceschanged = populateVoices;

  speakButton.addEventListener('click', () => {
    const text = textArea.value;
    const selectedIndex = voiceSelect.value;

    if (!text || selectedIndex === "select") return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    // Open mouth while speaking
    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    // Go back to smiling when done
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utterance);
  });

}