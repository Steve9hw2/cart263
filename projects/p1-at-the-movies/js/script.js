"use strict";

/**

Steve Berthiaume
CART 263 / Project 1 - A Night at the Movies
Clone Trooper Simulator
Based on Star Wars???

**/

let gameState = `title`; // title - selection - firing - running - results
let numberOfTroopers = 6;
let troopers = [];
let chosenTrooper = [];

let deathStar;
let deathStarRoom;
let deathStarHall;

let starwarsfont;

let trooperimg;
let trooper2img;
let trooper3img;
let trooper4img;
let trooper5img;

let trooperpose;
let trooperpose2;
let trooperpose3;
let trooperpose4;
let trooperpose5;

let troopershoot;
let troopershoot2;
let troopershoot3;
let troopershoot4;
let troopershoot5;

let nameJSON;
let rankJSON;

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
  //posing
  trooperpose = loadImage(`assets/images/trooperpose.png`);
  trooperpose2 = loadImage(`assets/images/trooperpose2.png`);
  trooperpose3 = loadImage(`assets/images/trooperpose3.png`);
  trooperpose4 = loadImage(`assets/images/trooperpose4.png`);
  trooperpose5 = loadImage(`assets/images/trooperpose5.png`);
  //shooting
  troopershoot = loadImage(`assets/images/troopergun.png`);
  troopershoot2 = loadImage(`assets/images/troopergun2.png`);
  troopershoot3 = loadImage(`assets/images/troopergun3.png`);
  troopershoot4 = loadImage(`assets/images/troopergun4.png`);
  troopershoot5 = loadImage(`assets/images/troopergun5.png`);
  //data
  nameJSON = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  rankJSON = loadJSON(`assets/data/ranks.json`)
}

function setup() {
  createCanvas(1800,900);
  print(`canvas added`);
  for(let i = 0; i < numberOfTroopers; i++) {
    let trooper;
    trooper = new Trooper();
    trooper.var = int(random(1,6));
    trooper.name = random(nameJSON.lastNames);
    trooper.rank = random(rankJSON.MilitaryRanks);
    trooper.number = i;
    troopers.push(trooper);
    print(`trooper added`);
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
    image(deathStarRoom,0,0);
    drawTrooperSelection();
    selectionText();
    selectionMouseover();
    break;
    case `firing`:
    image(deathStarHall,0,0);
    drawFiringTrooper();
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

function drawTrooperSelection() {
  for(let i = 0; i < numberOfTroopers; i++) {
    push();
    imageMode(CENTER);
    let trooper = troopers[i];
    trooper.y = 600;
    trooper.x = 200 + 280*i;
    switch(trooper.var){
      case 1:
      if (trooper.mouseover) {
      image(trooperpose,trooper.x,trooper.y);
      } else {
      image(trooperimg,trooper.x,trooper.y);
      }
      break;
      case 2:
      if (trooper.mouseover) {
      image(trooperpose2,trooper.x,trooper.y);
      } else {
      image(trooper2img,trooper.x,trooper.y);
      }
      break;
      case 3:
      if (trooper.mouseover) {
      image(trooperpose3,trooper.x,trooper.y);
      } else {
      image(trooper3img,trooper.x,trooper.y);
      }
      break;
      case 4:
      if (trooper.mouseover) {
      image(trooperpose4,trooper.x,trooper.y);
      } else {
      image(trooper4img,trooper.x,trooper.y);
      }
      break;
      case 5:
      if (trooper.mouseover) {
      image(trooperpose5,trooper.x,trooper.y);
      } else {
        image(trooper5img,trooper.x,trooper.y);
      }
    }
    pop();
  }
}

function selectionText() {
  push();
  textFont(starwarsfont);
  fill(255);
  textSize(60);
  text(`Choose your Trooper`, 215, 100);
  pop();
}

function selectionMouseover() {
  for(let i = 0; i < numberOfTroopers; i++) {
    let trooper = troopers[i]
    let check;
    check = trooper.checkMouseover();
    if (check) {
      drawStatBox();
      push();
      fill(255);
      textFont(starwarsfont);
      textSize(20);
      text(`Accuracy: ${trooper.stats.accuracy}/50`,120,80);
      text(`Speed: ${trooper.stats.speed}/50`,120,130);
      text(`Strength: ${trooper.stats.strength}/50`,120,180);
      let totalpower = trooper.stats.accuracy + trooper.stats.speed + trooper.stats.strength;
      text(`Total Power: ${totalpower}`, 120, 250);
      text(`${trooper.name}`,400,80);
      text(`${trooper.rank}`,400,130);
      pop();
    }
  }
}

function drawStatBox() {
  push();
  fill(0);
  rect(100,40,600,250,40);
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
      for(let i = 0; i < numberOfTroopers; i ++) {
        let trooper = troopers[i];
        trooper.checkMousePress();
      }
    break;
    case `firing`:
    break;
    case `running`:
    break;
    case `results`:
    break;
  }
}

function drawFiringTrooper() {
  push();
  imageMode(CENTER);
  switch(chosenTrooper.var) {
    case 1:
    image(troopershoot,200,500);
    break;
    case 2:
    image(troopershoot2,200,500);
    break;
    case 3:
    image(troopershoot3,200,500);
    break;
    case 4:
    image(troopershoot4,200,500);
    break;
    case 5:
    image(troopershoot5,200,500);
    break;
  }
  pop();
}
