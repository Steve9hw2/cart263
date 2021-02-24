class Trooper {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.length = 300;
    this.height = 640;
    this.var = 0;
    this.number = 0;
    this.stats = {
      accuracy: int(random(1,10)),
      speed: int(random(1,50)),
      strength: int(random(1,50))
    }
  }

  checkMouseover() {
    if (mouseX > this.x - this.length/2 && mouseX < this.x + this.length/2 && mouseY > this.y - this.height/2 && mouseY < this.y + this.height/2) {
      return(true);
    }
  }
}
