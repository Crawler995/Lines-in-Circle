(() => {
  const {step, radiusFactor, drawLineTime, drawLineDelay, backgroundColor, lineColor} = config;
  const {mapFunc} = config;

  let lines = [];
  let radius;

  setup = () => {
    radius = windowWidth < windowHeight ? windowWidth * radiusFactor : windowHeight * radiusFactor;

    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i < step; i++) {
      const center = createVector(windowWidth / 2, windowHeight / 2);

      const startIndex = i;
      const endIndex = parseInt(mapFunc(i)) % step;

      const dirStart = p5.Vector.fromAngle(radians(startIndex * 360 / step));
      const start = center.copy().add(dirStart.mult(radius));
      const dirEnd = p5.Vector.fromAngle(radians(endIndex * 360 / step));
      const end = center.copy().add(dirEnd.mult(radius));
      
      lines.push(new Line(
        start.x,
        start.y,
        end.x,
        end.y,
        lineColor,
        drawLineTime
      ));
    }
  }

  draw = () => {
    background(color(backgroundColor));

    noFill();
    stroke(lineColor);
    circle(windowWidth / 2, windowHeight / 2, radius * 2);

    lines.forEach((line, i) => {
      line.draw(i * drawLineDelay);
    });

    TWEEN.update();
  }
})();