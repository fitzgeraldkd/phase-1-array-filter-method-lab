// Code your solution here
function findMatching(driverNames, nameToMatch) {
    return driverNames.filter(name => name.toLowerCase() === nameToMatch.toLowerCase());
}

function fuzzyMatch(driverNames, nameStart) {
    return driverNames.filter(name => name.startsWith(nameStart));
}

function matchName(drivers, nameToMatch) {
    return drivers.filter(driver => driver.name === nameToMatch);
}