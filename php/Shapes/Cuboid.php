<?php

namespace Shapes;

class Cuboid implements ShapeInterface, SolidShapeInterface, ManageShapeInterface
{
	public float $length;
	public float $width;
	public float $height;

	public function __construct(float $height, float $width, float $length)
	{
		$this->height = $height;
		$this->width = $width;
		$this->length = $length;
	}

	public function area()
	{
		return $this->width * $this->length;
	}

	public function volume()
	{
		return $this->height * $this->area();
	}

	public function calculate()
	{
		return $this->volume();
	}
}
