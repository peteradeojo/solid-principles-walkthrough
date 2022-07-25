import AreaCalculator from "./AreaCalculator";

export default class SumOutputter {
  calculator: AreaCalculator;

  constructor(calculator: AreaCalculator) {
    this.calculator = calculator;
  }

  public json(): { data: number } {
    return { data: this.calculator.sum() };
  }

  public html(): string {
    return `The sum of the areas of the shapes is ${this.calculator
      .sum()
      .toFixed(3)}`;
  }
}
