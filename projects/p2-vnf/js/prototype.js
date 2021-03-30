"use strict";
let textJSON;
let currentIndex;
$(document).ready(function() {
  $.getJSON("dialogue/prototype.json", function(data){
    console.log(data.dialogue)
    currentIndex = textJSON.dialogue[0].one[0].text
  }).fail(function(){
    console.log("An error has occurred.");
  });
});


console.log(`${textJSON}`)

$(`#text`).text(currentIndex);

console.log(`script prints`)
$(`#cr_enthused`).hide();
$(`#cr_pain`).hide();
$(`#cr_neutral`).hide();
$(`#cr_pleased`).hide();
$(`#cr_shock`).hide();
$(`#cr_tears`).hide();
$(`#cr_unsure`).hide();
