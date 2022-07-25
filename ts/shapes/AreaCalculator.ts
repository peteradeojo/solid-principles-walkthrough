import ShapeInterface from "./ShapeInterface";

export default class AreaCalculator {
  shapes: ShapeInterface[];

  constructor(shapes: ShapeInterface[]) {
    this.shapes = shapes;
  }

  sum(): number {
    return this.shapes.reduce((acc, shape) => acc + shape.area(), 0);
  }
}
