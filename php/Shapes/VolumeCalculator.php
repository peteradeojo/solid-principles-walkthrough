<?php

namespace Shapes;

class VolumeCalculator extends AreaCalculator
{
	/**
	 * @var SolidShapeInterface[]|ManageShapeInterface[] $shapes
	 */
	protected $shapes;

	public function __construct($shapes = [])
	{
		parent::__construct($shapes);
	}

	public function sum()
	{
		$sum = 0;
		foreach ($this->shapes as $shape) {
			if (is_a($shape, SolidShapeInterface::class)) {
				$sum += $shape->calculate();
				continue;
			}
		}
		return $sum;
	}
}
