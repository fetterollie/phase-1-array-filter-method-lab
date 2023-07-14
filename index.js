// Code your solution here
function findMatching(drivers = [], name = "") {
    const matching = drivers.filter(driver => driver.toUpperCase() == name.toUpperCase())
    return matching
};

function fuzzyMatch(drivers = [], name = "") {
    const matching = drivers.filter(driver => driver[0] == name[0])
    return matching
};

function matchName(drivers = [], string = "") {
    const matching = drivers.filter(driver => driver.name == string)
    return matching
};