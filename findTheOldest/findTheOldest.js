let findTheOldest = function(people) {
	const currentYear = new Date().getFullYear();
	const oldest = people.sort((a,b) => {
      if (a.yearOfDeath == undefined && b.yearOfDeath == undefined) {
      	a.currentYear = currentYear;
      	b.currentYear = currentYear;
      	lastPeron = a.currentYear - a.yearOfBirth;
      	nextPerson = b.currentYear - b.yearOfBirth;
      } else if (b.yearOfDeath == undefined) {
      	b.currentYear = currentYear;
      	lastPerson = a.yearOfDeath - a.yearOfBirth;
      	nextPerson = b.currentYear - b.yearOfBirth;
      } else if (a.yearOfDeath == undefined) {
      	a.currentYear = currentYear;
      	lastPeron = a.currentYear - a.yearOfBirth;
      	nextPerson = b.yearOfDeath - b.yearOfBirth;
      } else {
      	lastPerson = a.yearOfDeath - a.yearOfBirth;
      	nextPerson = b.yearOfDeath - b.yearOfBirth;
      }
      return lastPerson > nextPerson ? -1 : 1;
    });
    return people[0];
}

module.exports = findTheOldest
