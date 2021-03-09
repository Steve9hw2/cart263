// Steve Berthiaume
// Haiku Generator Plus
"use strict";

let fiveSyllableLines = [
  `O, to be a tree`,
  `The cat does not know`,
  `We are all forests`,
  `You have done your best`,
  `They are all gone now`
];
let sevenSyllableLines = [
  `Say the things left unsaid`,
  `Never believe the wind's lies`,
  `The autumn stretches its legs`,
  `Nothing can satisfy you`,
  `They will not come back again`
];

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let p1 = document.getElementById(`line-1`);
let p2 = document.getElementById(`line-2`);
let p3 = document.getElementById(`line-3`);

let db1 = false; // db = debounce = check that the text isn't already changing
let db2 = false;
let db3 = false;

p1.innerText = line1;
p2.innerText = line2;
p3.innerText = line3;

p1.addEventListener(`click`,lineClicked1);
p2.addEventListener(`click`,lineClicked2);
p3.addEventListener(`click`,lineClicked3);

function lineClicked1(event) {
  if (db1 === false) {
  db1 = true;
  fadeOut(event.target, 1, db1);
  console.log(db1);
  }
}
function lineClicked2(event) {
  if (db2 === false) {
  db2 = true;
  fadeOut(event.target, 1, db2);
  console.log(db2);
  }
}
function lineClicked3(event) {
  if (db3 === false) {
  db3 = true;
  fadeOut(event.target, 1, db3);
  console.log(db3);
  }
}

function fadeOut(element, opacity, db) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function(){
      fadeOut(element, opacity, db);
    });
  } else {
    setNewLine(element);
    fadeIn(element, opacity, db);
  }
}

function fadeIn(element, opacity, db) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1) {
    requestAnimationFrame(function(){
      fadeIn(element, opacity, db);
    });
  } else {
    db = false;
  }
}

function setNewLine(element) {
  if(element === p1 || element === p3) {
    element.innerText = random(fiveSyllableLines);
  } else if (element === p2) {
    element.innerText = random(sevenSyllableLines);
  }
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
