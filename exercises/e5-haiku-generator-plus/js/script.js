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

let words = [
  `a`,
  `able`,
  `about`,
  `absolute`,
  `accept`,
  `account`,
  `achieve`,
  `across`,
  `act`,
  `active`,
  `actual`,
  `add`,
  `address`,
  `admit`,
  `advertise`,
  `affect`,
  `afford`,
  `after`,
  `afternoon`,
  `again`,
  `against`,
  `age`,
  `agent`,
  `ago`,
  `agree`,
  `air`,
  `all`,
  `allow`,
  `almost`,
  `along`,
  `already`,
  `alright`,
  `also`,
  `although`,
  `always`,
  `america`,
  `amount`,
  `and`,
  `another`,
  `answer`,
  `any`,
  `apart`,
  `apparent`,
  `appear`,
  `apply`,
  `appoint`,
  `approach`,
  `appropriate`,
  `area`,
  `argue`,
  `arm`,
  `around`,
  `arrange`,
  `art`,
  `as`,
  `ask`,
  `associate`,
  `assume`,
  `at`,
  `attend`,
  `authority`,
]

let line1 = random(fiveSyllableLines);
let line2 = random(sevenSyllableLines);
let line3 = random(fiveSyllableLines);

let title = document.getElementById(`title`);
let p1 = document.getElementById(`line-1`);
let p2 = document.getElementById(`line-2`);
let p3 = document.getElementById(`line-3`);
let button = document.getElementById(`speakerbutton`);



let db1 = false; // db = debounce = check that the text isn't already changing
let db2 = false;
let db3 = false;


let poemSpoken = false;

title.innerText = random(words);
p1.innerText = line1;
p2.innerText = line2;
p3.innerText = line3;

p1.addEventListener(`click`,lineClicked1);
p2.addEventListener(`click`,lineClicked2);
p3.addEventListener(`click`,lineClicked3);

button.addEventListener(`click`,readPoem);

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

function readPoem() {
  if (!poemSpoken) {
    poemSpoken = true;
    responsiveVoice.speak(title.innerText, "UK English Male", {onend: function(){
      responsiveVoice.speak(line1, "UK English Male", {onend: function(){
        responsiveVoice.speak(line2, "UK English Male", {onend: function(){
          responsiveVoice.speak(line3, "UK English Male", {onend: function(){
            poemSpoken = false;
          }});
        }});
      }});
    }})
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
    let randomLine = random(fiveSyllableLines);
    element.innerText = randomLine;
    switch(element){
      case p1:
      line1 = randomLine;
      break;
      case p3:
      line3 = randomLine;
      break;
    }
  } else if (element === p2) {
    let randomLine = random(sevenSyllableLines);
    element.innerText = randomLine;
    line2 = randomLine;
  }
}

function random(array) {
  let index = Math.floor(Math.random() * array.length);
  return array[index];
}
