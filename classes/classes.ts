class Vehicle {
  constructor(public color: string) {}
  protected drive(): void {
    console.log("chugga chugga");
  }
  driving(): void {
    this.drive();
  }

  honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle("orange");
vehicle.driving();
console.log(vehicle.color);

const car = new Car(4, "red");
console.log(car.color);
car.startDrivingProcess();
car.honk();
