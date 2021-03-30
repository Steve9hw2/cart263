"use strict";
let textJSON;
$(document).ready(function() {
  $.getJSON("dialogue/prototype.json", function(data){
    console.log(data.dialogue)
  }).fail(function(){
    console.log("An error has occurred.");
  });
});


console.log(`${textJSON}`)
let currentIndex = textJSON.dialogue.one
$(`#text`).text(currentIndex);

console.log(`script prints`)
$(`#cr_enthused`).hide();
$(`#cr_pain`).hide();
$(`#cr_neutral`).hide();
