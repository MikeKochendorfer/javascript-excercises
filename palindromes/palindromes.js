const palindromes = function(string) {
	const cleanedString = string.replace(/\W/g,'').toLowerCase();
	const reversedString = cleanedString.split('').reverse().join('')
	return cleanedString == reversedString;
}

module.exports = palindromes
