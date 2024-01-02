class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  get Radius() {
    return this.Radius;
  }

  set Radius(radious) {
    this.radious = radius;
  }
}

const circleRadius = new Circle(2.5, "red");
console.log(circleRadius.radius);
