"use strict;"

let tarotData = undefined;
let fortune = 'No fortune found yet.'

function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`)
}


function setup() {
  createCanvas(windowWidth,windowHeight);

  let card = random(tarotData.tarot_interpretations);
  fortune = random(card.fortune_telling);
}

function draw() {
  background(255);
  push();
  textSize(32)
  textAlign(CENTER, CENTER);
  fill(0);
  text(fortune,width/2,height/2);
  pop();
};
