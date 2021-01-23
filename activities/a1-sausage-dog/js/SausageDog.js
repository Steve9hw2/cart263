class SausageDog extends Animal {

  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25
    this.overlapping = false;
  }

  update() {
    super.update();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed() {
    super.overlap();
    if (this.overlapping) {
          this.found = true
    }
  }

}
