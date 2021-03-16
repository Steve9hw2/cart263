"use strict";

$(`.top-secret`).on(`click`, redact);

setInterval(revelation, 500);

$(`#failure`).hide(); // hiding what appears in the fail state
$(`#crabbed`).hide();
let speakText = ` `; // this is the value which will be changed to allow responsiveVoice to speak
let speaking = false; // this bool ensures the "hacker" cannot read two things at once

let music = new Audio(`assets/sounds/Noisestorm-CrabRave.mp3`) // totally official government

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
  let previousScore = $(`#score-number`).text();
  let newScore = previousScore;
  newScore++;
  $(`#score-number`).text(newScore);
  if ($(this).text() === speakText) { // this if cancels the speaking of the last spoken line of text if it's interrupted by being redacted.
    responsiveVoice.cancel();
    speaking = false;
  }
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1 && speaking === false) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
    speaking = true;
    speakText = $(this).text();
    responsiveVoice.speak(speakText, "Bosnian Male", {onend: function(){
      speaking = false;
      checkFailure();
    }});
  }
}

function checkFailure() { // check that all text has been revealed, once the voice is done speaking
  if ($(`.redacted`).length === 0) {
    music.play();
    $(`#secret-document`).hide();
    $(`#score`).hide();
    setTimeout(showFailure, 31000);
  }
}

function showFailure() { // show the funny 🦀
  $(`#failure`).show();
  setTimeout(revealAltered, 110000);
}

function revealAltered() { // show the *final* end screen
  $(`#failure`).hide();
  $(`#crabbed`).show();
}
// i used this as a reference for playing music without a preload-
// https://www.codegrepper.com/code-examples/javascript/jquery+play+audio
