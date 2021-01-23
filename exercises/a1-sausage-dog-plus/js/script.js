"use strict;"

const NUM_ANIMALS_IMAGES = 10;
const NUM_ANIMALS = 100;

const animalImagePrefix = "assets/images/animal"
const sausageImagePath = "assets/images/sausage-dog.png"

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

function preload() {
    for(let i = 0; i < NUM_ANIMALS_IMAGES; i++) {
      let animalImage = loadImage(`${animalImagePrefix}${i}.png`);
      animalImages.push(animalImage);
    }
    sausageDogImage = loadImage(`${sausageImagePath}`)
};

function setup() {
    createCanvas(windowWidth, windowHeight);
    createAnimals();
    createSausageDog();
};

function draw() {
    background(255,0,255);
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
    y : random(0,width),
    animalImage: random(animalImages)
  }
  return randomData;
}

function createSausageDog() {
  let x = random(0, width);
  let y = random(0, height);
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
