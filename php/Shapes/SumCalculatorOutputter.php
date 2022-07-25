<?php

namespace Shapes;

class SumCalculatorOutputter
{
	protected $areaCalculator;

	public function __construct(AreaCalculator $areaCalculator)
	{
		$this->areaCalculator = $areaCalculator;
	}

	public function JSON()
	{
		return json_encode(['sum' => $this->areaCalculator->sum()]);
	}

	public function HTML()
	{
		return implode('', [
			'',
			"Sum of the areas of the provided shapes: ",
			$this->areaCalculator->sum(), ''
		]);
	}
}
