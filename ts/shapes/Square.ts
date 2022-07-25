import ShapeInterface from "./ShapeInterface";

export default class Square implements ShapeInterface {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  public area(): number {
    return this.length * this.length;
  }
}
