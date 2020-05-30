<?php

function binary($arr, $item)
{
	$low = 0;

	$high = count($arr) - 1;

	while ($low <= $high) {

		$mid = floor(($low + $high) / 2);

		$pos = $arr[$mid];

		if ($pos == $item) {
			return $mid;
		}
		if ($pos > $item) {
			$high = $mid - 1;
		}
		else
		{
			$low = $mid + 1;
		}
	}
}