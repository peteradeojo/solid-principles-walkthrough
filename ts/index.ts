import AreaCalculator from "./shapes/AreaCalculator";
import Circle from "./shapes/Circle";
import Cuboid from "./shapes/Cuboid";
import Square from "./shapes/Square";
import SumOutputter from "./shapes/SumOutputter";
import VolumeCalculator from "./shapes/VolumeCalculator";

const circle = new Circle(5);
const square = new Square(5);

const areaCalculator = new AreaCalculator([circle, square]);
const volumeCalculator = new VolumeCalculator([
  new Cuboid(3, 3, 3),
  new Cuboid(2, 2, 2),
]);

const areaOutputter = new SumOutputter(areaCalculator);
const volumeOutputter = new SumOutputter(volumeCalculator);

console.log(areaOutputter.json());
console.log(volumeOutputter.json());
