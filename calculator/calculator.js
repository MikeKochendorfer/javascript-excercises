function add (a,b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, current) => total + current, 0);
}

function multiply (array) {
	return array.reduce((total, current) => total * current, 1);
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(num) {
	if (num < 0) return 'ERROR'
	return num >= 1 ? num * factorial(num -1) : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}