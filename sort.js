function parentsSort(obj, start, fin)
{
	let i = 0

	let mass = []

	while(mass[mass.length - 1] != start)
	{
		for(key in parents)
		{
			if (key == fin && !mass.includes(parents[key])) {
				mass[i] = parents[key]
				i++
			}
			if (key == mass[i - 1] ) {
				mass[i] = parents[key]
				i++
			}
		}

	}

	mass.unshift(fin)

	return mass.reverse()
}

//obj - объект parents узлов, полученных в результате работы алгоритма Дейкстры

// start - название начального узла графа; fin - конечного;