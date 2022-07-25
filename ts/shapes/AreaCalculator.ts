import Circle from "./Circle";
import Square from "./Square";

export default class AreaCalculator {
  protected shapes: any[];

  constructor(shapes: any[]) {
    this.shapes = shapes;
  }

  public sum(): number {
    return this.shapes.reduce((acc, shape) => {
      if (shape instanceof Circle) {
        return acc + Math.pow(shape.radius, 2) * Math.PI;
      } else if (shape instanceof Square) {
        return acc + Math.pow(shape.length, 2);
      }
    }, 0);
  }

  public output(): string {
    return `The area of the shapes is ${this.sum().toFixed(3)}`;
  }
}
