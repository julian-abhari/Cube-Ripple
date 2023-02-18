class Block {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.velocity = p5.Vector.random3D();
    this.velocity.mult(random(0.2, 1));
    this.acceleration = createVector(0, 0, 0);
    this.radius = 4;
    this.lifetime = 255;
    this.rHeight = 100;
    this.rWidth = 30;
  }

  show(angle, offset) {
    push();
    //this.rHeight = map(sin(angle + offset), -1, 1, 100, 300);
    this.rHeight = 200*(sin(0.5 * offset + angle));
    translate(this.position.x, this.position.y, this.position.z);
    noStroke();
    normalMaterial(255);
    box(this.rWidth, this.rHeight, this.rWidth);
    pop();
  }
}
