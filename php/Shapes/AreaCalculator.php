<?php

namespace Shapes;

class AreaCalculator
{

	protected $shapes;

	public function __construct($shapes = [])
	{
		$this->shapes = $shapes;
	}

	public function sum()
	{
		$area = [];
		foreach ($this->shapes as $shape) {
			if (is_a($shape, ShapeInterface::class)) {
				$area[] = $shape->area();
				continue;
			}
		}

		return array_sum($area);
	}
}
