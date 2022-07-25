import ShapeInterface from "./ShapeInterface";

export default class Circle implements ShapeInterface {
	radius: number;
	
	constructor(radius: number) {
		this.radius = radius;
	}

	public area(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
}
