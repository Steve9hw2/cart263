class Plasma {

  constructor() {
    this.front = {
      x:0,
      y:0,
    };
    this.back = {
      x:0,
      y:0,
    };
    this.vx = 0;
    this.vy = 0;
  }

  physics() {
    if(shotLength > 0) {
      this.front.x += this.vx;
      this.front.y += this.vy;
      shotLength --;
    } else {
      this.front.x += this.vx;
      this.front.y += this.vy;
      this.back.x += this.vx;
      this.back.y += this.vy;
    }
  }

  drawShot() {
    push();
    stroke(255,0,0);
    strokeWeight(8);
    line(this.back.x,this.back.y,this.front.x,this.front.y);
    pop();
  }

}
