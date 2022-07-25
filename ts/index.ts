"use strict";

import AreaCalculator from "./shapes/AreaCalculator";
import Circle from "./shapes/Circle";
import Square from "./shapes/Square";

const circle = new Circle(5);

const areaCalc = new AreaCalculator([circle, new Square(4)]);

console.log(areaCalc.output());
