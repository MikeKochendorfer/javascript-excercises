const repeatString = function(string, number) {
	if (number >= 0) {
		stringRepeat = ''
		for (i = 0; i < number; i++){
		stringRepeat = stringRepeat.concat(string)
	}
		return stringRepeat
	} else {
		return 'ERROR'
	}
}

module.exports = repeatString
