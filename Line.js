class Line {
  constructor(x1, y1, x2, y2, colorStr, drawTime) {
    this.start = createVector(x1, y1);
    this.end = createVector(x2, y2);
    this.curEnd = this.start.copy();
    this.color = color(colorStr);

    this.drawTime = drawTime;

    this.startingDraw = false;

    this.tween = new TWEEN.Tween(this.curEnd).easing(TWEEN.Easing.Quartic.InOut);
    this.tween.to(this.end, drawTime);
  }

  draw(delay) {
    if(!this.startingDraw) {
      this.tween.delay(delay);
      this.tween.start();
      this.startingDraw = true;
    }

    stroke(this.color);
    line(this.start.x, this.start.y, this.curEnd.x, this.curEnd.y);
  }
}