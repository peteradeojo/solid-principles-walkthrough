<?php

namespace Shapes;

class Square implements ShapeInterface, ManageShapeInterface
{
	public float $length;

	public function __construct(float $length)
	{
		$this->length = $length;
	}

	public function area()
	{
		return pow($this->length, 2);
	}

	public function calculate()
	{
		return $this->area();
	}
}
