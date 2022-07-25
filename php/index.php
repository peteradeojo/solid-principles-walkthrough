<?php

use Shapes\AreaCalculator;
use Shapes\Circle;
use Shapes\Shape;
use Shapes\Square;
use Shapes\SumCalculatorOutputter;

require './autoload.php';

$shapes = [
	new Circle(2),
	new Square(4),
	new Square(6),
];

$areas = new AreaCalculator($shapes);

echo $areas->output();
