<?php

function qsort(array $arr)
{
	if (count($arr) <= 1) {
		return $arr;
	}

	$start = $arr[0];

	$left = [];

	$right = [];

	for ($i=1; $i < count($arr); $i++) { 
		if ($arr[$i] <= $start) {
			$left[] = $arr[$i];
		}
		else
		{
			$right[] = $arr[$i];
		}
	}

	$left = qsort($left);

	$right = qsort($right);

	return array_merge($left, array($start), $right);
}