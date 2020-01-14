const ftoc = function(tempFahrenheit) {
	celciusTemp = (tempFahrenheit - 32) * (5/9)
	return Math.round(celciusTemp * 10) / 10
}

const ctof = function(tempCelcius) {
	fahrenheitTemp = tempCelcius * (9/5) + 32
	return Math.round(fahrenheitTemp * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
