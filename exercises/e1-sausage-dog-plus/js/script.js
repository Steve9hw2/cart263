"use strict;"

const NUM_ANIMALS_IMAGES = 18;
const NUM_ANIMALS = 180;

const animalImagePrefix = "assets/images/animal"
const sausageImagePath = "assets/images/sausagedog.png"
const backdropPath = "assets/images/dogpound.png"
const dogsongPath = "assets/sounds/Dogsong.mp3"

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

let backdrop = undefined;
let dogsong = undefined;
let dogsongPlaying = false;

let musicTimer = 0;

function preload() {
    for(let i = 0; i < NUM_ANIMALS_IMAGES; i++) {
      let animalImage = loadImage(`${animalImagePrefix}${i}.png`);
      animalImages.push(animalImage);
    }
    sausageDogImage = loadImage(`${sausageImagePath}`)
    backdrop = loadImage(`${backdropPath}`)
    dogsong = loadSound(`${dogsongPath}`)
};

function setup() {
    frameRate(30);
    createCanvas(1215, 810);
    createAnimals();
    createSausageDog();
};

function draw() {
    image(backdrop,0,0);
    playDogsong();
    updateMusicTimer();
    updateAnimals();
    updateSausageDog();
}

function mousePressed() {
  sausageDog.mousePressed();
}

function createAnimals() {
  for(let i = 0; i < NUM_ANIMALS; i++) {
    let randomData = undefined;
    randomData = randomizeAnimal();
    let animal = new Animal(randomData.x, randomData.y, randomData.animalImage);
    animals.push(animal);
  }
}

function randomizeAnimal() {
  let randomData = {
    x : random(0, width),
    y : random(height/2,height),
    animalImage: random(animalImages)
  }
  return randomData;
}

function createSausageDog() {
  let x = random(0, width);
  let y = random(height/2, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

function updateAnimals() {
  for(let i = 0; i < animals.length; i ++) {
    animals[i].update();
  }
}

function updateSausageDog() {
  sausageDog.update();
}

function playDogsong() {
  if (!dogsongPlaying) {
    dogsong.play();
    dogsongPlaying = true;
  }
  if (musicTimer >= 1110) {   // frame rate of 30, dogsong lasts 37 seconds
    musicTimer = 0;
    dogsongPlaying = false;
  }
}

function updateMusicTimer() {
  if (dogsongPlaying) {
    musicTimer ++;
  }
}
