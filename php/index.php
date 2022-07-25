<?php

use Shapes\AreaCalculator;
use Shapes\Circle;
use Shapes\Cuboid;
use Shapes\Shape;
use Shapes\Square;
use Shapes\SumCalculatorOutputter;
use Shapes\VolumeCalculator;

require './autoload.php';

$shapes = [
	new Circle(2),
	new Square(4),
	new Square(6),
];

$areas = new AreaCalculator($shapes);
$output = new SumCalculatorOutputter($areas);

echo $output->JSON();
echo "\n";
echo $output->HTML();
echo "\n\n";

$cuboid = new Cuboid(2, 3, 4);
$volume = new VolumeCalculator([$cuboid, new Cuboid(3, 5, 6)]);
$output2 = new SumCalculatorOutputter($volume);

echo $output2->JSON();
echo "\n";
echo $output2->HTML();
echo "\n\n";
