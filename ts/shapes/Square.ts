import ManageShapeInterface from "./ManageShapeInterface";
import ShapeInterface from "./ShapeInterface";

export default class Square implements ShapeInterface, ManageShapeInterface {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  area(): number {
    return this.length * this.length;
  }

  calculate(): number {
    return this.area();
  }
}
