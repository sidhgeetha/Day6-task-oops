class Uber {
  constructor(model, color, type, number) {
    this.model = model;
    this.color = color;
    this.type = type;
    this.number = number;
  }
  distance(startingLocation, endingLocation) {
    const distance = endingLocation - startingLocation;
    return distance;
  } //distacne,base price, demand price
  getPrice(distance, basePrice, costPerKilometer, demandPrice) {
    
    let distanceForBasePrice = 2;

    let extrakMS = distance - distanceForBasePrice;

    let totalPrice = basePrice + extrakMS * costPerKilometer + demandPrice;

    return totalPrice;
  }
}

const ride = new Uber("sv", "Red", "xx", 1234);

console.log(ride);

const startingLocation = 4;
const endingLocation = 25;

const distance = ride.distance(startingLocation, endingLocation);
console.log(distance);

const totalPrice = ride.getPrice(distance, 50, 10, 0);
console.log(totalPrice);
