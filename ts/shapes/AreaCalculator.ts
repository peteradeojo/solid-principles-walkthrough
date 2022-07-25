import { Shape } from "./ShapeInterface";

export default class AreaCalculator {
  shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public sum(): number {
    return this.shapes.reduce((acc, shape) => acc + shape.area(), 0);
  }
}
