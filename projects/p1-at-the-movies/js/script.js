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
let numberOfTargets = 10; // shooting section - targets
let targets = [];
let firedShots = 0;
let brokenTargets = 0;
let currentShot = undefined;
let gunshots = [];
let shotLength = 1;
let currentTarget;

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

let trooperrun;
let trooperrun2;
let trooperrun3;
let trooperrun4;
let trooperrun5;

let target;

let dude;
let dudex = 300;
let dudevx = 20;
let dudecaught = false;

let textp1;
let textp2;
let textp3;
let textp4;
let textp5;
let voiceSpeaking = false;
let voiceSection = 0;

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
  //running
  trooperrun = loadImage(`assets/images/trooperrun.png`);
  trooperrun2 = loadImage(`assets/images/trooperrun2.png`);
  trooperrun3 = loadImage(`assets/images/trooperrun3.png`);
  trooperrun4 = loadImage(`assets/images/trooperrun4.png`);
  trooperrun5 = loadImage(`assets/images/trooperrun5.png`);
  //target
  target = loadImage(`assets/images/target.png`);
  //luke the dude
  dude = loadImage(`assets/images/dude.png`);
  //data
  nameJSON = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  rankJSON = loadJSON(`assets/data/ranks.json`)
}

function setup() {
  createCanvas(1800,900);
  frameRate(30);
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
  for(let i = 0; i < numberOfTargets; i++) {
    let currentTarget;
    currentTarget = new Target();
    currentTarget.x = random(1000,1700);
    currentTarget.y = random(200,700);
    currentTarget.number = i;
    targets.push(currentTarget);
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
    drawTargets();
    drawGunfire();
    drawHit();
    checkFiringEnd();
    break;
    case `running`:
    image(deathStarHall,0,0);
    trooperRuns();
    escapingDude();
    drawRunningTrooper();
    doesTrooperCatch();
    dudeEscapes();
    break;
    case `results`:
    image(deathStarRoom,0,0);
    drawStandingTrooper();
    drawResults();
    if(voiceSection < 5) {
      resultsVoice();
    }
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
        gunfire();
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

function drawTargets() {
    currentTarget = targets[brokenTargets];
    image(target,currentTarget.x,currentTarget.y);
}

function gunfire() {
    currentShot = new Plasma();
    firedShots++;
    currentShot.vx = random(10,30);
    currentShot.vy = random(-30,30);
    gunshots.push(currentShot);
}

function drawGunfire() {
    for (let i = 0; i < gunshots.length; i++) {
      currentShot = gunshots[i];
      currentShot.physics();
      currentShot.hitTarget();
    }
}

function drawHit() {
  push();
  textFont(starwarsfont);
  fill(255);
  textSize(40);
  text(`Targets Hit: ${brokenTargets}`,160,100);
  let remainingshots = 10 - firedShots;
  text(`Shots Left: ${remainingshots}`,160,160);
  pop();
}

function checkFiringEnd() {
  if(firedShots >= 10) {
    gameState = `running`;
  }
  chosenTrooper.x = 0
}

function trooperRuns() {
  chosenTrooper.x += chosenTrooper.stats.speed;
  print(chosenTrooper.x)
}

function drawRunningTrooper() {
  push();
  imageMode(CENTER);
  switch(chosenTrooper.var) {
    case 1:
    image(trooperrun,chosenTrooper.x,500);
    break;
    case 2:
    image(trooperrun2,chosenTrooper.x,500);
    break;
    case 3:
    image(trooperrun3,chosenTrooper.x,500);
    break;
    case 4:
    image(trooperrun4,chosenTrooper.x,500);
    break;
    case 5:
    image(trooperrun5,chosenTrooper.x,500);
    break;
  }
  pop();
}

function escapingDude() {
  dudex += dudevx;
  image(dude,dudex,300);
}

function doesTrooperCatch() {
  if(chosenTrooper.x > dudex) {
    dudecaught = true;
    gameState = `results`;
  }
}

function dudeEscapes() {
  if(dudex > 1800) {
    gameState = `results`;
  }
}

function drawStandingTrooper() {
  switch(chosenTrooper.var){
    case 1:
    image(trooperpose,300,300);
    break;
    case 2:
    image(trooperpose2,300,300);
    break;
    case 3:
    image(trooperpose3,300,300);
    break;
    case 4:
    image(trooperpose4,300,300);
    break;
    case 5:
    image(trooperpose5,300,300);
    break;
  }
}

function drawResults() {
    push();
    fill(0);
    rect(800,100,800,700,60);
    fill(255);
    textFont(starwarsfont);
    textSize(30);
    text(`Dear ${chosenTrooper.name},`,900,200);
    textp1 = `Dear ${chosenTrooper.name},`;
    textSize(20);;
    if(brokenTargets > 0) {
    text(`It would seem you managed to break a target.`,900,300);
    textp2 = `It would seem you managed to break a target.`;
    } else {
    text(`You are absolutely useless with a weapon.`, 900, 300);
    textp2 = `You are absolutely useless with a weapon.`;
    }
    if(brokenTargets > 0 && !dudecaught) {
    text(`You let that guy in the hall slip, though.`, 900, 400);
    textp3 = `You let that guy in the hall slip, though.`;
    text(`Get back to training, ${chosenTrooper.name}.`, 900, 500);
    textp4 = `Get back to training, ${chosenTrooper.name}.`;
  } else if(brokenTargets > 0 && dudecaught == true) {
    text(`You caught that guy in the hall, too?.`, 900, 400);
    textp3 = `You caught that guy in the hall, too?.`;
    text(`Good work, ${chosenTrooper.name}.`, 900, 500);
    textp4 = `Good work, ${chosenTrooper.name}.`;
  } else if(brokenTargets == 0 && dudecaught == true) {
    text(`At least you caught that dude in the hall.`, 900, 400);
    textp3 = `At least you caught that dude in the hall.`;
    text(`You'll be living in the shooting range.`,900, 500);
    textp4 = `You'll be living in the shooting range.`;
  } else if(brokenTargets == 0 && !dudecaught) {
    text(`You let that guy slip, too??`, 900, 400);
    textp3 = `You let that guy slip, too??`;
    text(`You're fired. i'm booting you into space.`, 900, 500);
    textp4 = `You're fired. i'm booting you into space.`;
  }
    text(`With love, from Mr. vader`, 900, 600);
    textp5 = `With love, from Mr. vader`;
    pop();
}

function resultsVoice() {
  if(!voiceSpeaking){
    voiceSpeaking = true;
  switch(voiceSection){
    case 0:
    responsiveVoice.speak(textp1, "UK English Male", {onend: function(){
      voiceSpeaking = false;
    }});
    break;
    case 1:
    responsiveVoice.speak(textp2, "UK English Male", {onend: function(){
      voiceSpeaking = false;
    }});
    break;
    case 2:
    responsiveVoice.speak(textp3, "UK English Male", {onend: function(){
      voiceSpeaking = false;
    }});
    break;
    case 3:
    responsiveVoice.speak(textp4, "UK English Male", {onend: function(){
      voiceSpeaking = false;
    }});
    break;
    case 4:
    responsiveVoice.speak(textp5, "UK English Male", {onend: function(){
      voiceSpeaking = false;
    }});
    break;
  }
  voiceSection ++;
}
}
