<?php

namespace Shapes;

class AreaCalculator
{
	/**
	 * @var ShapeInterface[]|ManageShapeInterface[] $shapes
	 */
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
				$area[] = $shape->calculate();
				continue;
			}
		}

		return array_sum($area);
	}
}
