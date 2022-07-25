import SolidShapeInterface from "./SolidShapeInterface";

export default class VolumeCalculator {
  shapes: SolidShapeInterface[];

  constructor(shapes: SolidShapeInterface[]) {
    this.shapes = shapes;
  }

  public sum() {
    return this.shapes.reduce((acc, shape) => acc + shape.volume(), 0);
  }
}
