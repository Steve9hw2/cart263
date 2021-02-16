/**

bubble popper

steve

**/

let state = `game` // game, results
let video; // webcam
let handpose; // model
let predictions = [];
let bubble;
let bubblespopped = 0;
let score = 0;
let newScoreAdding = false;
let newScoreTimer = 0;
let newScore = 0;
let bubbleX = undefined;
let bubbleY = undefined;
let averageScore = 0;

function setup() {
  createCanvas(640, 480);

  video = createCapture(VIDEO);
  video.hide();

  handpose = ml5.handpose(video, { flipHorizontal: true } , function() { print('it loaded');} );

  handpose.on(`predict`, function(results) { print(results); predictions = results; });

  bubble = {
    x:random(width),
    y:height,
    size:100,
    vx:0,
    vy:-2,
    fill:{
      r:0,
      g:100,
      b:200,
      }
    }

}

function draw() {
  background(0);
  if (state === `game`) {
    if (predictions.length > 0) {
      drawPin();
      }

    moveBubble();

    if (bubble.y < -100) {
      resetBubble();
    }

    drawBubble();
    drawScore();
    drawPopped();
    drawScoreAdded();
    drawAverage();
    checkEnd();
  } else if (state === `results`) {
    background(0);
    drawEndAccuracy();
  }
}

function drawPin() {
  let hand = predictions[0];
  let index = hand.annotations.indexFinger;
  let tip = index[3];
  let base = index[0];
  let tipX = tip[0];
  let tipY = tip[1];
  let baseX = base[0];
  let baseY = base[1];

  push(); // body
  noFill();
  stroke(255,255,255);
  strokeWeight(2);
  line(baseX,baseY,tipX,tipY);
  pop();

  push(); // head
  noStroke();
  fill(255,0,0);
  ellipse(baseX, baseY, 20);
  pop();

  // popping
  let d = dist(tipX, tipY, bubble.x, bubble.y);
  if (d < bubble.size/2) {
    let bubblePos = map(bubble.y, 0, height, 0, 1) // when bubblePos is 0, it's at the top, and 1 is for the bottom.
    bubblespopped++;
    newScore = int(100 * bubblePos)
    score += newScore // you get more score for a bubble lower on the canvas than one higher.
    newScoreAdding = true;
    resetBubble();
  }
}

function moveBubble() {
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

function resetBubble() {
  bubbleX = bubble.x;
  bubbleY = bubble.y;
  bubble.x = random(width);
  bubble.y = height+100;
  bubble.fill.r = random(255);
  bubble.fill.g = random(255);
  bubble.fill.b = random(255);
}

function drawBubble() {
  push();
  fill(bubble.fill.r, bubble.fill.g, bubble.fill.b);
  noStroke();
  ellipse(bubble.x,bubble.y,bubble.size);
  pop();
}

function drawScore() {
  push();
  fill(0,150,250);
  textSize(40);
  text(int(score),width/9,height - height/9);
  pop();
}

function drawAverage() {
  averageScore = int(score/bubblespopped) // calculating and then displaying an average score
  push();
  fill(0, 150,250);
  textSize(20);
  text(`Accuracy: ${averageScore}%`,width - 3*width/9, height - height/9);
  pop();
}

function drawEndAccuracy() {
  averageScore = int(score/bubblespopped) // calculating and then displaying an average score
  push();
  fill(0, 150,250);
  textSize(40);
  text(`Accuracy: ${averageScore}%`,width/2, height - height/2);
  pop();
}

function drawPopped() {
  push();
  fill(0, 150,250);
  textSize(20);
  text(`Bubbles Popped: ${bubblespopped}`,width/9-40, height - height/9 - 70);
  pop();
}

function drawScoreAdded() {
  if (newScoreAdding) {
    if (newScoreTimer < 10) {
      push();
      textSize(30);
      textStyle(BOLD);
      fill(247, 209, 139);
      text(`+ ${newScore}`,bubbleX,bubbleY);
      pop();
      newScoreTimer++
    } else {
      newScoreAdding = false;
      newScoreTimer = 0;
      newScore = 0;
    }
}
}

function checkEnd() {
  if (bubblespopped >= 10) {
    state = `results`;
  }
}
