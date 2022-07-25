import AreaCalculator from "./shapes/AreaCalculator";
import Circle from "./shapes/Circle";
import Square from "./shapes/Square";
import SumOutputter from "./shapes/SumOutputter";

const circle = new Circle(4);
const square = new Square(4);

const area = new AreaCalculator([circle, square]);
const outputter = new SumOutputter(area);

console.log(outputter.output());
