import ShapeInterface from "./ShapeInterface";

export default class Square implements ShapeInterface {
  length: number;

  constructor(length: number) {
    this.length = length;
  }

  area(): number {
    return this.length * this.length;
  }
}
