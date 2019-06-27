// You've been hired to write the software to count the votes for a local election.
// Write a function countVotes that receives an array of (unique) names, each one
// representing a vote for that person. Your function should return the name of
// the winner of the election. In the case of a tie, the person whose name comes
// last alphabetically wins the election (a dumb rule to be sure, but the votes
// don't need to know).

// Example:

// const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

// countVotes(votes);  // should return 'michael'
// Analyze the time and space complexity of your solution.

const countVotesOG1 = votes => {
	let winner = {name: '', count: 0};
	let count = {};
	let name = 'a';

	for (let i = 0; i < votes.length; i++) {
		if (votes[i] in count) {
			count[votes[i]] = count[votes[i]] + 1;
		} else {
			count[votes[i]] = 1;
		}
		console.log('count: ', count);

		if (count[votes[i]] >= winner.count) {
			winner.count = count[votes[i]];
			winner.name = votes[i];
		}
	}

	for (let i = 0; i < votes.length; i++) {
		if (votes[i] > name && winner.count == count[votes[i]]) name = votes[i];
	}

	return name;
};

const countVotes = a =>
	a.reduce(
		(c, v) => ({
			...c,
			[v]: (c[v] || 0) + 1,
			...(c[v] > c.m
				? {m: c[v], w: v}
				: c[v] == c.m && (v > c.w && {w: v}))
		}),
		{m: 0, w: ''}
	).w;

const countVotes = a =>
	a.reduce(
		// loop through the entire array, keeping track of a state object as we do
		(c, v) => ({
			...c, // copy (spread in) the state from it's previous position
			[v]: (c[v] || 0) + 1, // if the name is not in the state, add it, otherwise increment it
			...(c[v] > c.m // if the votes for the current name are greater then the max
				? {m: c[v], w: v} // change the max vote count and the winning vote name
				: c[v] == c.m && (v > c.w && {w: v})) // otherwise, make sure the name value is greater and change accordingly
		}),
		{m: 0, w: ''} // initial state
	).w;

const countVotes = a =>
	a.reduce(
		// loop through the entire array, keeping track of a state object as we do
		(c, v) => ({
			...c, // copy the state from it's previous position
			...(!c[v] ? {[v]: 1} : {[v]: c[v]++}), // if the name is not in the state, add it, otherwise increment it, then spread this into the state
			...(c[v] > c.m // if the votes for the current name are greater then the max
				? {m: c[v], w: v} // change the max vote count and the winning vote name
				: c[v] == c.m && (v > c.w && {w: v})) // otherwise, make sure the name value is greater and change accordingly
		}),
		{m: 0, w: ''}
	).w;

const countVotesOG = a => {
	const c = {};
	let m = 0;
	let w = '';

	a.forEach(v => {
		if (!c[v]) c[v] = 0;
		c[v]++;
		if (c[v] > m) {
			m = c[v];
			w = v;
		} else if (c[v] === m) {
			if (v > w) w = v;
		}
	});
	return w;
};

console.log(
	countVotes([
		'veronica',
		'mary',
		'alex',
		'james',
		'mary',
		'michael',
		'alex',
		'michael'
	])
);

console.log(
	countVotes([
		'john',
		'johnny',
		'jackie',
		'johnny',
		'john',
		'jackie',
		'jamie',
		'jamie',
		'john',
		'johnny',
		'jamie',
		'johnny',
		'john'
	])
);
