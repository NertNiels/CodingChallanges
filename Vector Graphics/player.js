function player(pos, name) {
  this.pos = pos;
  this.vel = createVector(0, 0);
  this.angle = 0;

  this.name = name;

  this.show = function() {
    if(this.vel.x < -5) this.vel.x = -5;
    else if(this.vel.x > 5) this.vel.x = 5;
    if(this.vel.y < -5) this.vel.y = -5;
    else if(this.vel.y > 5) this.vel.y = 5;

    this.pos.add(this.vel);

    push();
    translate(this.pos.x, this.pos.y)

    rotate(this.angle);
    triangle(-10, -10, -10, 10, 20, 0);

    pop();

    this.vel.mult(0.95);
  }

}
