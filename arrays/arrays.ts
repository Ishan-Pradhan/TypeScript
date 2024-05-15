const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

//help with inference when extracting values
const cars = carMakers[0];
const mycar = carMakers.pop();

//prevent incompatible values
carMakers.push(100);

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
