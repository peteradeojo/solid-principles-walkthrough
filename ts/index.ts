import AreaCalculator from "./shapes/AreaCalculator";
import Circle from "./shapes/Circle";
import { Shape } from "./shapes/ShapeInterface";
import Square from "./shapes/Square";
import SumOutputter from "./shapes/SumOutputter";

const circle: Shape = new Circle(5);
const square: Shape = new Square(5);

const areaCalculator = new AreaCalculator([circle, square]);
const outputter = new SumOutputter(areaCalculator);

console.log(outputter.json());
console.log(outputter.html());
