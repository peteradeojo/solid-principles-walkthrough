<?php

namespace Shapes;

class Circle implements ShapeInterface, ManageShapeInterface
{
	public float $radius;

	public function __construct(float $radius)
	{
		$this->radius = $radius;
	}

	public function area()
	{
		return pi() * pow($this->radius, 2);
	}

	public function calculate()
	{
		return $this->area();
	}
}
