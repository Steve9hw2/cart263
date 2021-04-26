"use strict";

let textJSON;
let currentIndex;
let currentParagraph = 0;
let currentText;
let currentSpeaker;
let currentExpression;

$(document).ready(function() { // on start
  $.getJSON("dialogue/creamtext.json", function(data){
    textJSON = data.dialogue;
    console.log(textJSON);
    currentIndex = textJSON[0].speech
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

$(`#nextarrow`).on(`click`,function() {
  nextIndex();
})

function nextIndex() { // update values
  $.getJSON("dialogue/creamtext.json", function(data){
    currentParagraph++;
    textJSON = data.dialogue;
    currentIndex = textJSON[currentParagraph].speech
    console.log(`${currentIndex}`)
    currentText = currentIndex[0].text
    console.log(`${currentIndex[0].text}`)
    currentSpeaker = currentIndex[0].speaker
    console.log(`${currentIndex[0].speaker}`)
    currentExpression = currentIndex[0].expression
    console.log(`${currentIndex[0].expression}`)
    $(`#text`).text(currentText);
    $(`#speaker`).text(currentSpeaker);
    switchExpression();
});
}

function switchExpression() { // this function switches the expression dynamically. when called, it disables all portraits that are not the active one.
  switch(currentSpeaker) {
    case `Cream`:
    showCream();
    hideAqua();
    hideLilac();
    break;
    case `Aqua`:
    hideCream();
    showAqua();
    hideLilac();
    break;
    case `Lilac`:
    hideCream();
    hideAqua();
    showLilac();
  }
  if (currentSpeaker == `Cream`) { // scan for current expression, hide all other portraits
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
  } else if (currentSpeaker == `Aqua`) {
  switch(currentExpression) {
    case `angry`:
    $(`#aq_angry`).show();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).hide();
    break;
    case `blank`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).show();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).hide();
    break;
    case `confusion`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).show();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).hide();
    break;
    case `neutral`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).show();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).hide();
    break;
    case `sad`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).show();
    $(`#aq_smile`).hide();
    break;
    case `smile`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).show();
    break;
    case `vanished`:
    $(`#aq_angry`).hide();
    $(`#aq_blank`).hide();
    $(`#aq_confusion`).hide();
    $(`#aq_neutral`).hide();
    $(`#aq_sad`).hide();
    $(`#aq_smile`).hide();
    break;
  }
  } else if (currentSpeaker == `Lilac`) {
  switch(currentExpression) {
    case `annoyed`:
    $(`#li_annoyed`).show();
    $(`#li_baffled`).hide();
    $(`#li_blank`).hide();
    $(`#li_confused`).hide();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).hide();
    break;
    case `baffled`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).show();
    $(`#li_blank`).hide();
    $(`#li_confused`).hide();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).hide();
    break;
    case `blank`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).hide();
    $(`#li_blank`).show();
    $(`#li_confused`).hide();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).hide();
    break;
    case `confused`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).hide();
    $(`#li_blank`).hide();
    $(`#li_confused`).show();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).hide();
    break;
    case `neutral`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).hide();
    $(`#li_blank`).hide();
    $(`#li_confused`).hide();
    $(`#li_neutral`).show();
    $(`#li_sleepy`).hide();
    break;
    case `sleepy`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).hide();
    $(`#li_blank`).hide();
    $(`#li_confused`).hide();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).show();
    break;
    case `vanished`:
    $(`#li_annoyed`).hide();
    $(`#li_baffled`).hide();
    $(`#li_blank`).hide();
    $(`#li_confused`).hide();
    $(`#li_neutral`).hide();
    $(`#li_sleepy`).hide();
    break;
  }
  } else if (currentSpeaker == `end`) {
  $(`#endscreen`).show();
  $(`#nextarrow`).hide();
  $(`#textbox`).hide();
  $(`#bg_night`).hide();
  $(`#bg_twilight`).hide();
  $(`#bg_dawn`).hide();
  }

}

console.log(`script prints`)

function showCream() {
  $(`#cream`).show();
  $(`#bg_night`).show();
  $(`#endscreen`).hide();
}

function hideCream() {
  $(`#cream`).hide();
  $(`#bg_night`).hide();
  $(`#endscreen`).hide();
}

function showAqua() {
  $(`#aqua`).show();
  $(`#bg_twilight`).show();
  $(`#endscreen`).hide();
}

function hideAqua() {
  $(`#aqua`).hide();
  $(`#bg_twilight`).hide();
  $(`#endscreen`).hide();
}

function showLilac() {
  $(`#lilac`).show();
  $(`#bg_dawn`).show();
  $(`#endscreen`).hide();
}

function hideLilac() {
  $(`#lilac`).hide();
  $(`#bg_dawn`).hide();
  $(`#endscreen`).hide();
}
