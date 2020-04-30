// Code your solution here
function findMatching(drivers,str){
return drivers.filter(driver => driver.toLowerCase()===str.toLowerCase())
}

function fuzzyMatch(source, testString){
    return source.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
      )
}

function matchName(drivers, str){
return drivers.filter(driver=>driver.name ===str)
}