const reverseString = function(string) {
	stringAsArray = string.split('')
	arrayReversed = stringAsArray.reverse()
	stringReversed = arrayReversed.join('')
	return stringReversed
}

module.exports = reverseString
