
let gLetersHTML = '';

gLeters.forEach((gLeter) => {
  gLetersHTML += `
  <button onclick="playSound('${gLeter.sound}')">${gLeter.name}</button>
  `;
});

document.querySelector('.js-fidelat-geez').innerHTML = gLetersHTML;
console.log(gLetersHTML);

function playSound(soundFile) {
  const audio = document.getElementById("myAudio");
  audio.src = soundFile; // Set the source of the audio element
  audio.play(); // Play the audio
};
