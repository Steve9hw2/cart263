"use strict";

let userData = {
  name: `anonymous`
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`web-storage-example-personalization`));
  if (data !== null) {
    userData.name = data.name;
  }
  else {
    userData.name = prompt(`What's ya name?`)
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }
}

function draw() {
    background (255);

    push();
    textSize(64);
    textAlign(CENTER);
    text(`Howdy, ${userData.name}!`, width/2, height/2);
    pop();
}
