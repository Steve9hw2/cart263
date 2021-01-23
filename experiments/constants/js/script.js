"use strict";

const numCircles = 10;
let circleAlpha = 50;
let circleSizeIncrease = 50;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  for (let i = 0; i < numCircles; 1++) {
    push();
    fill(255,circleAlpha);
    ellipse(width/2,height/2, i * circleSizeIncrease)
    pop();
  }
}
