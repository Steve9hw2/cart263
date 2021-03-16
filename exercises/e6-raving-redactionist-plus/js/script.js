"use strict";

$(`.top-secret`).on(`click`, redact);

setInterval(revelation, 500);

let speakText = ` `;
let speaking = false;

function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
  let previousScore = $(`#score-number`).text();
  let newScore = previousScore++;
  $(`#score-number`).text(newScore);
  if ($(this).text() === speakText) {
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
    }});
  }
}
