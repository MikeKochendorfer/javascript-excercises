const sumAll = function(int1, int2) {
	if (int1 < 0 || int2 < 0) return 'ERROR';
	if (typeof int1 !== 'number' || typeof int2 !== 'number') return 'ERROR';

	let argsSorted = [int1, int2].sort()
	let sum = []
	for (let i = argsSorted[0]; i < argsSorted[argsSorted.length-1] + 1; i++) {
		sum.push(i)
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	return sum.reduce(reducer)
}

module.exports = sumAll
