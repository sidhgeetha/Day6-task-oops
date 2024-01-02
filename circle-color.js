class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  get Color() {
    return this.color;
  }

  set Color(color) {
    this.color = color;
  }
  toString() {
    return `Circle[radius=${this.radius}, color=${this.color}]`;
  }
}

const circleColor = new Circle(2.5, "blue");
console.log(circleColor.toString());
