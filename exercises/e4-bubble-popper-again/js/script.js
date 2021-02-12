/**

bad
because i dislike ml5
(or at least things that use the webcam)

steve

**/

let video; // webcam
let handpose; // model
let predictions = [];
let bubble;
let score = 0;

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
  }

}

function draw() {
  background(0);

  if (predictions.length > 0) {
    drawPin();
    }

  moveBubble();

  if (bubble.y < 0) {
    resetBubble();
  }

  drawBubble();
  drawScore();
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
    let bubblePos = map(bubble.y, 0, height, 0, 1)
    score += 100 * bubblePos // you get more score for a bubble lower on the canvas than one higher.
    resetBubble();
}
}

function moveBubble() {
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

function drawBubble() {
  push();
  fill(0, 100, 200);
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
