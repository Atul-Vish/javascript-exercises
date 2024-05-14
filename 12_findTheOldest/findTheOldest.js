const findTheOldest = function(people) {

  let oldest = people.reduce((prev, next) => {
    let prevAge = 0;
    let nextAge = 0;
    let currentYear = (new Date()).getFullYear();

    if (prev.yearOfDeath === undefined) {
      prev.yearOfDeath = currentYear;
    } else if (next.yearOfDeath === undefined) {
      next.yearOfDeath = currentYear;
    }

    prevAge = prev.yearOfDeath - prev.yearOfBirth;
    nextAge = next.yearOfDeath - next.yearOfBirth;

    return prevAge > nextAge ? prev : next;
  });

  return oldest;
};

function ewi(people) {
    
  let oldest = people.reduce((prev, next) => {
    let prevAge = 0;
    let nextAge = 0;
    let currentYear = (new Date()).getFullYear();
    if (prev.yearOfDeath === undefined) {
      prev.yearOfDeath = currentYear;
    } else if (next.yearOfDeath === undefined) {
      next.yearOfDeath = currentYear;
    }

    prevAge = prev.yearOfDeath - prev.yearOfBirth;
    nextAge = next.yearOfDeath - next.yearOfBirth;

    return prevAge > nextAge ? prev : next;
  });

  return oldest;
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(ewi(people));  
// Do not edit below this line
module.exports = findTheOldest;
