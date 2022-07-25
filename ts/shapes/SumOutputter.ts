import AreaCalculator from "./AreaCalculator";

export default class SumOutputter {
  calculator: AreaCalculator;

  constructor(calculator: AreaCalculator) {
    this.calculator = calculator;
  }

  public output(): string {
    return `The sum of the areas of the shapes is ${this.calculator.sum().toFixed(2)}`;
  }
}
