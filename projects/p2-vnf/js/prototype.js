"use strict";
let textJSON;
let currentIndex;
let currentText;
let currentSpeaker;
let currentExpression;
$(document).ready(function() {
  $.getJSON("dialogue/prototype.json", function(data){
    textJSON = data.dialogue;
    console.log(textJSON);
    currentIndex = textJSON[0].one
    console.log(`${currentIndex}`)
    currentText = currentIndex[0].text
    console.log(`${currentIndex[0].text}`)
    currentSpeaker = currentIndex[0].speaker
    console.log(`${currentIndex[0].speaker}`)
    currentExpression = currentIndex[0].expression
    console.log(`${currentIndex[0].expression}`)
    // load first state of the text
    $(`#text`).text(currentText);
    $(`#speaker`).text(currentSpeaker);
    switchExpression();
  }).fail(function(){
    console.log("An error has occurred.");
  });
});

function switchExpression() { // this function switches the expression dynamically. when called, it disables all portraits that are not the active one.
  switch(currentExpression) {
    case `enthused`:
    $(`#cr_enthused`).show();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `neutral`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).show();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `pain`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).show();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `pleased`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).show();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `question`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).show();
    break;
    case `shock`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).show();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `tears`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).show();
    $(`#cr_unsure`).hide();
    $(`#cr_question`).hide();
    break;
    case `unsure`:
    $(`#cr_enthused`).hide();
    $(`#cr_pain`).hide();
    $(`#cr_neutral`).hide();
    $(`#cr_pleased`).hide();
    $(`#cr_shock`).hide();
    $(`#cr_tears`).hide();
    $(`#cr_unsure`).show();
    $(`#cr_question`).hide();
    break;
  }
}

console.log(`script prints`)
