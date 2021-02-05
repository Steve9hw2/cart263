"use strict";

/**
Spy Profile Generator
Steve Berthiaume

Generates a random spy profile and remembers it!
**/

let spyProfile = {
    name: `**REDACTED**`,
    alias: `**REDACTED**`,
    secretWeapon: `**REDACTED**`,
    nationality: `**REDACTED**`
}

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let chemicalsData = undefined;
let flowerData = undefined;
let nationalityData = undefined;
let namesData = undefined;
let nounsData = undefined;

function preload() {
  // tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  // instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  // objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  chemicalsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/science/toxic_chemicals.json`);
  flowerData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/flowers.json`);
  nationalityData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/nationalities.json`);
  namesData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  nounsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
    if (data) {
      // let password = prompt(`Agent! What is your password?!`);
      // if (password === data.password) {
        spyProfile.name = data.name;
        spyProfile.alias = data.alias;
        spyProfile.secretWeapon = data.secretWeapon;
        spyProfile.nationality = data.nationality;
      // }
    }
    else {
      generateSpyProfile();
    }
}

function generateSpyProfile() {
    spyProfile.name = prompt(`Agent!! What is your name?!`);
    let chemical = random(chemicalsData.chemicals);
    let name = random(namesData.lastNames);
    spyProfile.alias = `The ${name} ${chemical}`;
    let flower = random(flowerData.flowers);
    let noun = random(nounsData.nouns);
    spyProfile.secretWeapon = `The ${flower} ${noun}`
    spyProfile.nationality = random(nationalityData.nationalities);

    localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

function draw() {
    background(255);

    let profile = `**SPY PROFILE! DO NOT DISTRIBUTE! **

    Name: ${spyProfile.name}
    Alias: ${spyProfile.alias}
    Secret Weapon: ${spyProfile.secretWeapon}
    Nationality: ${spyProfile.nationality}`;

    push();
    textFont(`Courier, monospace`);
    textSize(24);
    textAlign(LEFT,TOP);
    fill(0);
    text(profile, 100, 100);
    pop();
}
