const reconstructTrip = tickets => {
	let finalTrip = [];

	// Determine the start of the trip
	for (let i = 0; i < tickets.length; i++) {
		if (tickets[i][0] == null) {
			finalTrip.push(tickets[i][1]);
		}
	}

	// loops over the array to find all the next destinations in order
	while (finalTrip.length < tickets.length - 1) {
		for (let j = 0; j < tickets.length; j++) {
			if (finalTrip[finalTrip.length - 1] == tickets[j][0]) {
				finalTrip.push(tickets[j][1]);
			}
		}
	}

	// The loop stops when we get to null
	finalTrip.pop();
	return finalTrip;
};

const tickets = [
	['PIT', 'ORD'],
	['XNA', 'CID'],
	['SFO', 'BHM'],
	['FLG', 'XNA'],
	[null, 'LAX'],
	['LAX', 'SFO'],
	['CID', 'SLC'],
	['ORD', null],
	['SLC', 'PIT'],
	['BHM', 'FLG']
];

console.log(reconstructTrip(tickets));
//['LAX', 'SFO', 'BHM', 'FLG', 'XNA', 'CID', 'SLC', 'PIT', 'ORD']
