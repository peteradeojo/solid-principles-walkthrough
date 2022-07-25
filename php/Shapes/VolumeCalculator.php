<?php

namespace Shapes;

class VolumeCalculator extends AreaCalculator
{
	public function __construct($shapes = [])
	{
		parent::__construct($shapes);
	}

	public function sum()
	{
		$sum = 0;
		foreach ($this->shapes as $shape) {
			if (is_a($shape, SolidShapeInterface::class)) {
				$sum += $shape->volume();
				continue;
			}
		}
		return $sum;
	}
}
