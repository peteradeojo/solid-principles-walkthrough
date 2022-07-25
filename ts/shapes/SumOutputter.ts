import AreaCalculator from "./AreaCalculator";
import VolumeCalculator from "./VolumeCalculator";

export default class SumOutputter {
  calculator: AreaCalculator | VolumeCalculator;

  constructor(calculator: AreaCalculator | VolumeCalculator) {
    this.calculator = calculator;
  }

  json(): object {
    return { data: this.calculator.sum() };
  }

  html(): string {
    return `The sum of the areas of all shapes is ${this.calculator.sum()}`;
  }
}
