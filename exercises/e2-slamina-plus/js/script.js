"use strict";

const animals =  [
    "aardvark",
    "alligator",
    "alpaca",
    "antelope",
    "ape",
    "armadillo",
    "baboon",
    "badger",
    "bat",
    "bear",
    "beaver",
    "bison",
    "boar",
    "buffalo",
    "bull",
    "camel",
    "canary",
    "capybara",
    "cat",
    "chameleon",
    "cheetah",
    "chimpanzee",
    "chinchilla",
    "chipmunk",
    "cougar",
    "cow",
    "coyote",
    "crocodile",
    "crow",
    "deer",
    "dingo",
    "dog",
    "donkey",
    "dromedary",
    "elephant",
    "elk",
    "ewe",
    "ferret",
    "finch",
    "fish",
    "fox",
    "frog",
    "gazelle",
    "gila monster",
    "giraffe",
    "gnu",
    "goat",
    "gopher",
    "gorilla",
    "grizzly bear",
    "groundhog",
    "guinea pig",
    "hamster",
    "hedgehog",
    "hippopotamus",
    "hog",
    "horse",
    "hyena",
    "ibex",
    "iguana",
    "jackal",
    "jaguar",
    "kangaroo",
    "koala",
    "lamb",
    "lemur",
    "leopard",
    "lion",
    "lizard",
    "llama",
    "lynx",
    "mole",
  ];

  let currentState = 'game' // game, win

  let currentAnimal = ``;
  let currentAnswer = `Click to start`;
  let currentInput = ``;
  let inputKeys = [];
  let answerSubmitted = false;
  let scoreAdded = false;
  let score = 0;

  let scored1 = '';
  let scored2 = '';
  let scored3 = '';
  let scored4 = '';
  let scored5 = '';
  let scored6 = '';
  let scored7 = '';
  let scored8 = '';
  let scored9 = '';

  let aardvarkImg;
  let alligatorImg;
  let alpacaImg;
  let antelopeImg;
  let apeImg;
  let armadilloImg;
  let baboonImg;
  let badgerImg;
  let batImg;
  let bearImg;
  let beaverImg;
  let bisonImg;
  let boarImg;
  let buffaloImg;
  let bullImg;
  let camelImg;
  let canaryImg;
  let capybaraImg;
  let catImg;
  let chameleonImg;
  let cheetahImg;
  let chimpanzeeImg;
  let chinchillaImg;
  let chipmunkImg;
  let cougarImg;
  let cowImg;
  let coyoteImg;
  let crocodileImg;
  let crowImg;
  let deerImg;
  let dingoImg;
  let dogImg;
  let donkeyImg;
  let dromedaryImg;
  let elephantImg;
  let elkImg;
  let eweImg;
  let ferretImg;
  let finchImg;
  let fishImg;
  let foxImg;
  let frogImg;
  let gazelleImg;
  let gilamonsterImg;
  let giraffeImg;
  let gnuImg;
  let goatImg;
  let gopherImg;
  let gorillaImg;
  let grizzlybearImg;
  let groundhogImg;
  let guineapigImg;
  let hamsterImg;
  let hedgehogImg;
  let hippopotamusImg;
  let hogImg;
  let horseImg;
  let hyenaImg;
  let ibexImg;
  let iguanaImg;
  let jackalImg;
  let jaguarImg;
  let kangarooImg;
  let koalaImg;
  let lambImg;
  let lemurImg;
  let leopardImg;
  let lionImg;
  let lizardImg;
  let llamaImg;
  let lynxImg;
  let moleImg;

function preload() {
  aardvarkImg = loadImage("assets/images/aardvark.png")
  alligatorImg = loadImage("assets/images/alligator.png")
  alpacaImg = loadImage("assets/images/alpaca.png")
  antelopeImg = loadImage("assets/images/antelope.png")
  apeImg = loadImage("assets/images/ape.png")
  armadilloImg = loadImage("assets/images/armadillo.png")
  baboonImg = loadImage("assets/images/baboon.png")
  badgerImg = loadImage("assets/images/badger.png")
  batImg = loadImage("assets/images/bat.png")
  bearImg = loadImage("assets/images/bear.png")
  beaverImg = loadImage("assets/images/beaver.png")
  bisonImg = loadImage("assets/images/bison.png")
  boarImg = loadImage("assets/images/boar.png")
  buffaloImg = loadImage("assets/images/bull.png")
  bullImg = loadImage("assets/images/bull.png")
  camelImg = loadImage("assets/images/camel.png")
  canaryImg = loadImage("assets/images/canary.png")
  capybaraImg = loadImage("assets/images/capybara.png")
  catImg = loadImage("assets/images/cat.png")
  chameleonImg = loadImage("assets/images/chameleon.png")
  cheetahImg = loadImage("assets/images/cheetah.png")
  chimpanzeeImg = loadImage("assets/images/chimpanzee.png")
  chinchillaImg = loadImage("assets/images/chinchilla.png")
  chipmunkImg = loadImage("assets/images/chipmunk.png")
  cougarImg = loadImage("assets/images/cougar.png")
  cowImg = loadImage("assets/images/cow.png")
  coyoteImg = loadImage("assets/images/coyote.png")
  crocodileImg = loadImage("assets/images/crocodile.png")
  crowImg = loadImage("assets/images/crow.png")
  deerImg = loadImage("assets/images/deer.png")
  dingoImg = loadImage("assets/images/dingo.png")
  dogImg = loadImage("assets/images/dog.png")
  donkeyImg = loadImage("assets/images/donkey.png")
  dromedaryImg = loadImage("assets/images/dromedary.png")
  elephantImg = loadImage("assets/images/elephant.png")
  elkImg = loadImage("assets/images/elk.png")
  eweImg = loadImage("assets/images/ewe.png")
  ferretImg = loadImage("assets/images/ferret.png")
  finchImg = loadImage("assets/images/finch.png")
  fishImg = loadImage("assets/images/fish.png")
  foxImg = loadImage("assets/images/fox.png")
  frogImg = loadImage("assets/images/frog.png")
  gazelleImg = loadImage("assets/images/gazelle.png")
  gilamonsterImg = loadImage("assets/images/gilamonster.png")
  giraffeImg = loadImage("assets/images/giraffe.png")
  gnuImg = loadImage("assets/images/gnu.png")
  goatImg = loadImage("assets/images/goat.png")
  gopherImg = loadImage("assets/images/gopher.png")
  gorillaImg = loadImage("assets/images/gorilla.png")
  grizzlybearImg = loadImage("assets/images/grizzlybear.png")
  groundhogImg = loadImage("assets/images/groundhog.png")
  guineapigImg = loadImage("assets/images/guineapig.png")
  hamsterImg = loadImage("assets/images/hamster.png")
  hedgehogImg = loadImage("assets/images/hedgehog.png")
  hippopotamusImg = loadImage("assets/images/hippopotamus.png")
  hogImg = loadImage("assets/images/hog.png")
  horseImg = loadImage("assets/images/horse.png")
  hyenaImg = loadImage("assets/images/hyena.png")
  ibexImg = loadImage("assets/images/ibex.png")
  iguanaImg = loadImage("assets/images/iguana.png")
  jackalImg = loadImage("assets/images/jackal.png")
  jaguarImg = loadImage("assets/images/jaguar.png")
  kangarooImg = loadImage("assets/images/kangaroo.png")
  koalaImg = loadImage("assets/images/koala.png")
  lambImg = loadImage("assets/images/lamb.png")
  lemurImg = loadImage("assets/images/lemur.png")
  leopardImg = loadImage("assets/images/leopard.png")
  lionImg = loadImage("assets/images/lion.png")
  lizardImg = loadImage("assets/images/lizard.png")
  llamaImg = loadImage("assets/images/llama.png")
  lynxImg = loadImage("assets/images/lynx.png")
  moleImg = loadImage("assets/images/mole.png")


}

function setup() {
  createCanvas(windowWidth,windowHeight);
    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
}


function draw() {
  background(0);
  if (currentState === 'game') {
  if (currentAnswer === currentAnimal) {
    if (!scoreAdded) {
      scoreAdded = true;
      score += 1;
      switch(score) {
        case 1:
        scored1 = currentAnimal
        break;
        case 2:
        scored2 = currentAnimal
        break;
        case 3:
        scored3 = currentAnimal
        break;
        case 4:
        scored4 = currentAnimal
        break;
        case 5:
        scored5 = currentAnimal
        break;
        case 6:
        scored6 = currentAnimal
        break;
        case 7:
        scored7 = currentAnimal
        break;
        case 8:
        scored8 = currentAnimal
        break;
        case 9:
        scored9 = currentAnimal
        break;
      }
    }
    fill(0, 255, 0);
  }
  else {
    fill(255, 0 , 0);
  }
  text(currentAnswer,width/2,height/2);
  text(currentInput,width/2,height/3+height/3);
  fill(227, 185, 59);
  text(score,100,windowHeight-100);
  displayAnimal(scored1,1)
  displayAnimal(scored2,2)
  displayAnimal(scored3,3)
  displayAnimal(scored4,4)
  displayAnimal(scored5,5)
  displayAnimal(scored6,6)
  displayAnimal(scored7,7)
  displayAnimal(scored8,8)
  displayAnimal(scored9,9)
  if (score === 10) {
    currentState = 'win';
  }
  }
  else if (currentState === 'win') {
    fill(277,185,59);
    text("You win!",width/2,height/2)
  }
}

function keyPressed() {
  if (key !== 'Enter' && key !== 'Backspace' && !answerSubmitted) {
  inputKeys.push(key);
  currentInput = inputKeys.join('');
  }
  if (key === 'Enter' && !answerSubmitted) {
   currentAnswer = currentInput
   if (currentAnswer !== currentAnimal) {
     score = 0;
     scored1 = '';
     scored2 = '';
     scored3 = '';
     scored4 = '';
     scored5 = '';
     scored6 = '';
     scored7 = '';
     scored8 = '';
     scored9 = '';
   }
   inputKeys.splice(0,currentInput.length);
   answerSubmitted = true;
  }
  if (key === 'Backspace' && !answerSubmitted) {
    let lastKey = inputKeys.pop();
    currentInput = inputKeys.join('');
    print(inputKeys);
  }
}

function mousePressed() {
  if (currentState === 'game'){
  currentAnimal = random(animals);
  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(reverseAnimal);
  answerSubmitted = false;
  scoreAdded = false;
  inputKeys.splice(0,currentInput.length);
  currentAnswer = '';
  currentInput = '';
  }
}

function displayAnimal(animal,index) {
  imageMode(CENTER,CENTER);
  switch(animal){
    case 'aardvark':
      image(aardvarkImg,100+100*index,height-100);
    break;
    case 'alligator':
      image(alligatorImg,100+100*index,height-100);
    break;
    case 'alpaca':
      image(alpacaImg,100+100*index,height-100);
    break;
    case 'antelope':
      image(antelopeImg,100+100*index,height-100);
    break;
    case 'ape':
      image(apeImg,100+100*index,height-100);
    break;
    case 'armadillo':
      image(armadilloImg,100+100*index,height-100);
    break;
    case 'baboon':
      image(baboonImg,100+100*index,height-100);
    break;
    case 'badger':
      image(badgerImg,100+100*index,height-100);
    break;
    case 'bat':
      image(batImg,100+100*index,height-100);
    break;
    case 'bear':
      image(bearImg,100+100*index,height-100);
    break;
    case 'beaver':
      image(beaverImg,100+100*index,height-100);
    break;
    case 'bison':
      image(bisonImg,100+100*index,height-100);
    break;
    case 'boar':
      image(boarImg,100+100*index,height-100);
    break;
    case 'buffalo':
      image(buffaloImg,100+100*index,height-100);
    break;
    case 'bull':
      image(bullImg,100+100*index,height-100);
    break;
    case 'camel':
      image(camelImg,100+100*index,height-100);
    break;
    case 'canary':
      image(canaryImg,100+100*index,height-100);
    break;
    case 'capybara':
      image(capybaraImg,100+100*index,height-100);
    break;
    case 'cat':
      image(catImg,100+100*index,height-100);
    break;
    case 'chameleon':
      image(chameleonImg,100+100*index,height-100);
    break;
    case 'cheetah':
      image(cheetahImg,100+100*index,height-100);
    break;
    case 'chimpanzee':
      image(chimpanzeeImg,100+100*index,height-100);
    break;
    case 'chinchilla':
      image(chinchillaImg,100+100*index,height-100);
    break;
    case 'chipmunk':
      image(chipmunk,100+100*index,height-100);
    break;
    case 'cougar':
      image(cougarImg,100+100*index,height-100);
    break;
    case 'cow':
      image(cowImg,100+100*index,height-100);
    break;
    case 'coyote':
      image(coyoteImg,100+100*index,height-100);
    break;
    case 'crocodile':
      image(crocodileImg,100+100*index,height-100);
    break;
    case 'crow':
      image(crowImg,100+100*index,height-100);
    break;
    case 'deer':
      image(deerImg,100+100*index,height-100);
    break;
    case 'dingo':
      image(dingoImg,100+100*index,height-100);
    break;
    case 'dog':
      image(dogImg,100+100*index,height-100);
    break;
    case 'donkey':
      image(donkeyImg,100+100*index,height-100);
    break;
    case 'dromedary':
      image(dromedaryImg,100+100*index,height-100);
    break;
    case 'elephant':
      image(elephantImg,100+100*index,height-100);
    break;
    case 'elk':
      image(elkImg,100+100*index,height-100);
    break;
    case 'ewe':
      image(eweImg,100+100*index,height-100);
    break;
    case 'ferret':
      image(ferretImg,100+100*index,height-100);
    break;
    case 'finch':
      image(finchImg,100+100*index,height-100);
    break;
    case 'fish':
      image(fishImg,100+100*index,height-100);
    break;
    case 'fox':
      image(foxImg,100+100*index,height-100);
    break;
    case 'frog':
      image(frogImg,100+100*index,height-100);
    break;
    case 'gazelle':
      image(gazelleImg,100+100*index,height-100);
    break;
    case 'gila monster':
      image(gilamonsterImg,100+100*index,height-100);
    break;
    case 'giraffe':
      image(giraffeImg,100+100*index,height-100);
    break;
    case 'gnu':
      image(gnuImg,100+100*index,height-100);
    break;
    case 'goat':
      image(goatImg,100+100*index,height-100);
    break;
    case 'gopher':
      image(gopherImg,100+100*index,height-100);
    break;
    case 'gorilla':
      image(gorillaImg,100+100*index,height-100);
    break;
    case 'grizzly bear':
      image(grizzlybearImg,100+100*index,height-100);
    break;
    case 'groundhog':
      image(groundhogImg,100+100*index,height-100);
    break;
    case 'guinea pig':
      image(guineapigImg,100+100*index,height-100);
    break;
    case 'hamster':
      image(hamsterImg,100+100*index,height-100);
    break;
    case 'hedgehog':
      image(hedgehogImg,100+100*index,height-100);
    break;
    case 'hippopotamus':
      image(hippopotamusImg,100+100*index,height-100);
    break;
    case 'hog':
      image(hogImg,100+100*index,height-100);
    break;
    case 'horse':
      image(horseImg,100+100*index,height-100);
    break;
    case 'hyena':
      image(hyenaImg,100+100*index,height-100);
    break;
    case 'ibex':
      image(ibexImg,100+100*index,height-100);
    break;
    case 'iguana':
      image(iguanaImg,100+100*index,height-100);
    break;
    case 'jackal':
      image(jackalImg,100+100*index,height-100);
    break;
    case 'jaguar':
      image(jaguarImg,100+100*index,height-100);
    break;
    case 'kangaroo':
      image(kangarooImg,100+100*index,height-100);
    break;
    case 'koala':
      image(koalaImg,100+100*index,height-100);
    break;
    case 'lamb':
      image(lambImg,100+100*index,height-100);
    break;
    case 'lemur':
      image(lemurImg,100+100*index,height-100);
    break;
    case 'leopard':
      image(leopardImg,100+100*index,height-100);
    break;
    case 'lion':
      image(lionImg,100+100*index,height-100);
    break;
    case 'lizard':
      image(lizardmg,100+100*index,height-100);
    break;
    case 'llama':
      image(llamaImg,100+100*index,height-100);
    break;
    case 'lynx':
      image(lynxImg,100+100*index,height-100);
    break;
    case 'mole':
      image(moleImg,100+100*index,height-100);
    break;
  }
}


/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}


// I referenced this stackoverflow page for clearing an array.
// https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
// I also used this page as a reference for removing the last index.
// https://www.techiedelight.com/remove-last-element-from-array-javascript/
