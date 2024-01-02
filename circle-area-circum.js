class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  get getArea() {
    let x = this.radius; //pieRsquare

    return Math.PI * Math.pow(x, 2);
  }

  get getCircumference() {
    let x = this.radius; //2pieR
    return 2 * Math.PI * this.radius;
  }
}

const circleRadius = new Circle(2.5, "red");
console.log(circleRadius.getArearea);
console.log(circleRadius.getCircumference);
