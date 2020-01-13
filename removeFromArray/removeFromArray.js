const removeFromArray = function(arr, ...args) {
	for(let i = 0; i < args.length; args[i++]) {
		if (arr.includes(args[i])) {
			arr.splice(arr.indexOf(args[i]), 1)
		} 
	}	 
	return arr
}

module.exports = removeFromArray
