function isFound(name)
{
	if (name[name.length - 1] == 'M') 
	{
		return true;
	}
	else
	{
		return false;
	}
}

function Search(obj, name) {

	let search_queue = []

	let searched = []

	search_queue = search_queue.concat(obj[name])

	while(search_queue.length > 0)
	{
		let person = search_queue.shift()

		if (searched.includes(person) == false) 
		{
			switch(isFound(person))
			{
				case true: 

				return person + ' found';
				break;

				case false: 

				searched.push(person); 
				search_queue = search_queue.concat(obj[person]);
				break;
				
			}

		}
	}

	if (search_queue.length == 0) {
		return "not found"
	}

}