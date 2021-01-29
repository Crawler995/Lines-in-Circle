const config = {
  // there will be {360 / step} points on the circle
  step: 180,
  // in mobile platform, the radius of the circle will be {windowWidth * radiusFactor}
  // in PC platform, the radius of the circle will be {windowHeight * radiusFactor}
  radiusFactor: 1/3,
  // spend {drawLineTime} ms to draw a line
  drawLineTime: 3000,
  // when the previous line drawing started, it will delay {drawLineDelay} ms and then draw next line
  drawLineDelay: 100,

  backgroundColor: '#ffced3',
  lineColor: '#fff',

  // i equals the index of the start point on the circle
  // point 0 represents the point on the circle at three o'clock (x-axis positive direction)
  // point {step / 4} represents the point on the circle at six o'clock (y-axis negavite direction)
  // point {step / 2} represents the point on the circle at nine o'clock (x-axis negavite direction)
  // 
  // the result of the function will be parsed to integer,
  // and will be taken as the remainder of {step} to avoid 'out of range'
  mapFunc: function (i) {
    return i * 2 - 45;
  }
};
