import ShapeInterface from "./ShapeInterface";

export default class Circle implements ShapeInterface {
  radius: number;

  constructor(raduis: number) {
    this.radius = raduis;
  }

  public area(): number {
    return Math.PI * this.radius * this.radius;
  }
}
