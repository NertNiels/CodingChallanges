function bullet(x, y, dX, dY, intensity) {

  this.pos = createVector(x, y);
  this.dX = dX;
  this.dY = dY;
  this.intensity = intensity;

  this.show = function(i) {
    stroke(255);
    strokeWeight(this.intensity);



    line(this.pos.x, this.pos.y, this.pos.x + (this.dX*10), this.pos.y + (this.dY*10));

    this.intensity--;

    if(this.intensity < 1) bullets.splice(i, 1);
  }
}
