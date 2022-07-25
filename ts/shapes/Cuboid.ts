import ManageShapeInterface from "./ManageShapeInterface";
import ShapeInterface from "./ShapeInterface";
import SolidShapeInterface from "./SolidShapeInterface";

export default class Cuboid
  implements ShapeInterface, SolidShapeInterface, ManageShapeInterface
{
  height: number;
  length: number;
  width: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.length * this.width;
  }

  volume(): number {
    return this.area() * this.height;
  }

  calculate(): number {
    return this.volume();
  }
}
