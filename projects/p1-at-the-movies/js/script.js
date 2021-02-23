"use strict";

/**

Steve Berthiaume
CART 263 / Project 1 - A Night at the Movies
Clone Trooper Simulator
Based on Star Wars???

**/

let gameState = `title`; // title - selection - firing - running - results
let numberOfTroopers = 10;

let deathStar;
let deathStarRoom;
let deathStarHall;

let starwarsfont;

function preload() {
  deathStar = loadImage(`assets/images/deathstar.png`);
  deathStarRoom = loadImage(`assets/images/deathstarroom.png`)
  deathStarHall = loadImage(`assets/images/deathstarwall.png`)
  starwarsfont = loadFont(`assets/fonts/Starjedi.ttf`);
}

function setup() {
  createCanvas(1800,900);
}

function draw() {
  background(0);
  switch(gameState){
    case `title`:
    image(deathStar,0,0);
    drawTitle();
    break;
    case `selection`:
    break;
    case `firing`:
    break;
    case `running`:
    break;
    case `results`:
    break;
  }
}

function drawTitle() {
  push();
  textFont(starwarsfont);
  fill(255);
  textSize(40);
  text(`Storm Trooper`, 200, 300)
  text(`Training Simulator`, 200, 340)
  pop();
}
