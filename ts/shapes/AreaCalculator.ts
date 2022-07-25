import Circle from "./Circle";

export default class AreaCalculator {
  shapes: any[];

  constructor(shapes: any[]) {
    this.shapes = shapes;
  }

  public sum(): number {
    return this.shapes.reduce((acc, shape) => acc + shape.area(), 0);
  }
}
