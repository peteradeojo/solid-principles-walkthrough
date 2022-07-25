import ManageShapeInterface from "./ManageShapeInterface";
import ShapeInterface from "./ShapeInterface";

export default class Circle implements ShapeInterface, ManageShapeInterface {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }

  calculate(): number {
    return this.area();
  }
}
