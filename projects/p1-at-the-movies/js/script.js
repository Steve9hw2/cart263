"use strict";

/**

Steve Berthiaume
CART 263 / Project 1 - A Night at the Movies
Clone Trooper Simulator
Based on Star Wars???

**/

let gameState = `title`; // title - selection - firing - running - results
let numberOfTroopers = 6;

let deathStar;
let deathStarRoom;
let deathStarHall;

let starwarsfont;

let trooperimg;
let trooper2img;
let trooper3img;
let trooper4img;
let trooper5img;

function preload() {
  deathStar = loadImage(`assets/images/deathstar.png`);
  deathStarRoom = loadImage(`assets/images/deathstarroom.png`)
  deathStarHall = loadImage(`assets/images/deathstarwall.png`)
  starwarsfont = loadFont(`assets/fonts/Starjedi.ttf`);
  //troopers
  trooperimg = loadImage(`assets/images/trooper.png`);
  trooper2img = loadImage(`assets/images/trooper2.png`);
  trooper3img = loadImage(`assets/images/trooper3.png`);
  trooper4img = loadImage(`assets/images/trooper4.png`);
  trooper5img = loadImage(`assets/images/trooper5.png`);
}

function setup() {
  createCanvas(1800,900);
  for(let i; i < numberOfTroopers; i++) {
    
  }
}

function draw() {
  background(0);
  switch(gameState){
    case `title`:
    image(deathStar,0,0);
    drawTitle();
    drawPlayButton();
    break;
    case `selection`:
    image(deathStarHall,0,0);
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

function drawPlayButton() {
  print(mouseX,mouseY);
  push();
  if (mouseX >= 190 && mouseX <= 370 && mouseY >= 550 && mouseY <= 600) {
    fill(150);
  } else {
    fill(255);
  }
  textFont(starwarsfont);
  textSize(60);
  text(`Play`, 200, 600);
  pop();
}

function mousePressed() {
  switch(gameState) {
    case `title`:
    if (mouseX >= 190 && mouseX <= 370 && mouseY >= 550 && mouseY <= 600) {
      gameState = `selection`;
    }
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
