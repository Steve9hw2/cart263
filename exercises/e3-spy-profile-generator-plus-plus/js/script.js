"use strict";

/**
Spy Profile Generator
Steve Berthiaume

Generates a random spy profile and remembers it!
**/

let spyProfile = {
    name: `**REDACTED**`,
    codename: `**REDACTED**`,
    alias: `**REDACTED**`,
    secretWeapon: `**REDACTED**`,
    secretGadget: `**REDACTED**`,
    nationality: `**REDACTED**`,
    tarot: `**REDACTED**`,
    zodiac: `**REDACTED**`
}

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;
let chemicalsData = undefined;
let flowerData = undefined;
let nationalityData = undefined;
let namesData = undefined;
let nounsData = undefined;
let vegData = undefined;
let menuData = undefined;
let zodiacData = undefined;

function preload() {
  tarotData = loadJSON(`assets/data/tarotinfo.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  // objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  chemicalsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/science/toxic_chemicals.json`);
  flowerData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/plants/flowers.json`);
  nationalityData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/geography/nationalities.json`);
  namesData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/lastNames.json`);
  nounsData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/words/nouns.json`);
  vegData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/vegetables.json`);
  menuData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/foods/menuItems.json`);
  zodiacData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/zodiac.json`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
    if (data) {
      // let password = prompt(`Agent! What is your password?!`);
      // if (password === data.password) {
        spyProfile.name = data.name;
        spyProfile.codename = data.codename;
        spyProfile.alias = data.alias;
        spyProfile.secretWeapon = data.secretWeapon;
        spyProfile.secretGadget = data.secretGadget;
        spyProfile.nationality = data.nationality;
        spyProfile.tarot = data.tarot;
        spyProfile.zodiac = data.zodiac;
      // }
    }
    else {
      generateSpyProfile();
    }
}

function generateSpyProfile() {
    let zodiacN = undefined;
    spyProfile.name = prompt(`Agent!! What is your name?!`);
    let chemical = random(chemicalsData.chemicals);
    let name = random(namesData.lastNames);
    spyProfile.codename = random(menuData.menuItems);
    spyProfile.alias = `The ${name} ${chemical}`;
    let flower = random(flowerData.flowers);
    let noun = random(nounsData.nouns);
    spyProfile.secretWeapon = `The ${flower} ${noun}`;
    spyProfile.nationality = random(nationalityData.nationalities);
    let instrument = random(instrumentData.instruments);
    let veg = random(vegData.vegetables);
    spyProfile.secretGadget = `The ${veg} ${instrument}`;
    let tarot = random(tarotData.tarot_interpretations);
    let tarotname = tarot.name
    spyProfile.tarot = `${tarotname}`;
    let zodiacCase = Math.floor(Math.random() * Math.floor(12));
    switch(zodiacCase) {
      case 0:
         zodiacN = zodiacData.western_zodiac.Aries;
      break;
      case 1:
         zodiacN = zodiacData.western_zodiac.Taurus;
      break;
      case 2:
         zodiacN = zodiacData.western_zodiac.Gemini;
      break;
      case 3:
         zodiacN = zodiacData.western_zodiac.Cancer;
      break;
      case 4:
         zodiacN = zodiacData.western_zodiac.Leo;
      break;
      case 5:
         zodiacN = zodiacData.western_zodiac.Virgo;
      break;
      case 6:
         zodiacN = zodiacData.western_zodiac.Libra;
      break;
      case 7:
         zodiacN = zodiacData.western_zodiac.Scorpio;
      break;
      case 8:
         zodiacN = zodiacData.western_zodiac.Sagittarius;
      break;
      case 9:
         zodiacN = zodiacData.western_zodiac.Capricorn;
      break;
      case 10:
         zodiacN = zodiacData.western_zodiac.Aquarius;
      break;
      case 11:
         zodiacN = zodiacData.western_zodiac.Pisces;
      break;
    }
    let zodiacTitle = zodiacN.gloss
    spyProfile.zodiac = zodiacTitle
    localStorage.setItem(`spy-profile-data`,JSON.stringify(spyProfile));
}

function draw() {
    background(255);

    let profile = `**SPY PROFILE! DO NOT DISTRIBUTE! **

    Name: ${spyProfile.name}
    Codename: ${spyProfile.codename}
    Alias: ${spyProfile.alias}
    Secret Weapon: ${spyProfile.secretWeapon}
    Secret Gadget: ${spyProfile.secretGadget}
    Nationality: ${spyProfile.nationality}
    Tarot: ${spyProfile.tarot}
    Zodiac: ${spyProfile.zodiac}


    Press ENTER to clear your data, agent!`;

    push();
    textFont(`Courier, monospace`);
    textSize(24);
    textAlign(LEFT,TOP);
    fill(0);
    text(profile, 100, 100);
    pop();
}

function keyPressed() {
  if (key === `Enter`) {
    generateSpyProfile();
  }
}
