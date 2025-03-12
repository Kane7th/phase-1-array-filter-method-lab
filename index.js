// Code your solution here
function findMatching(drivers, name){
    const nameLower = name.toLowerCase();
    return drivers.filter(drivers => drivers.toLowerCase().includes(nameLower));
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//----------------------------------------------------------------------------------------------------------

function fuzzyMatch(drivers, letters) {
    const nameLetter = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(nameLetter));
}

//----------------------------------------------------------------------------------------------------------

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}