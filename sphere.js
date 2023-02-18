class Sphere {
  constructor(x, y, z, radius) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.radius = radius;
    this.blocks = [];
    for (var x = this.x; x < this.x + this.radius; x += 10) {
      this.blocks[x] = [];
      for (var z = this.z; z < this.z + this.radius; z += 10) {
        this.blocks[x][z] = new Block(x * 1.5, this.y, z * 1.5);
      }
    }
  }

  show(angle) {
    for (var x = this.x; x < this.x + this.radius; x += 30) {
      for (var z = this.z; z < this.z + this.radius; z += 30) {
        let distance = dist(x, z, this.radius / 2, this.radius / 2);
        let maximumDistance = dist(0, 0, this.radius / 2, this.radius);
        let offset = map(distance, 0, maximumDistance, -10, 10);
        this.blocks[x][z].show(angle, offset);
      }
    }
  }
}
