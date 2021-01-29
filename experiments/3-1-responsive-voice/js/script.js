"use strict;"

let phrase = "hello nerd";
let saying = ``; // track what is currently being said

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(255);
  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width / 2, height /2);
  pop();
}

function mousePressed() {
  responsiveVoice.speak("hello nerd", "Italian Female", {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  saying = phrase;
}

function hideSpeaking() {
  saying = ``;
}
