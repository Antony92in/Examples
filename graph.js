let graph = {
	start: {
		a: 5,
		b: 2,
	},

	a: {
		c: 4,
		d: 2,
	},

	b: {
		a: 8,
		d: 7,
	},

	c: {
		fin: 3,
		d: 6,
	},
	d: {
		fin: 1,
	},

	fin: {},

}

let costs = {
	a: 5,
	b: 2,
	c: 1/0,
	d: 1/0,
	fin: 1/0,
}


let parents = {
	a: 'start',
	b: 'start',
	c: null,
	d: null,
	fin: null,
}


let checked = []

function findLowestCostNode(obj)
{
	let lowest_cost = 1/0

	let lowest_cost_node = null

	for(item in obj)
	{
		if (obj[item] < lowest_cost && !checked.includes(item))  {
			lowest_cost = obj[item]

			lowest_cost_node = item
		}
	} 

	return lowest_cost_node;
}

let node = findLowestCostNode(costs)

while(node != null)
{
	let neighbors = graph[node]

	let cost = costs[node]

	for(n in neighbors)
	{
	    let new_cost = cost + neighbors[n]

	    if (costs[n] > new_cost) {
	    	costs[n] = new_cost

	    	parents[n] = node
	    }

	    
	}
checked.push(node)	

node = findLowestCostNode(costs)	
}

