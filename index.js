// Code your solution here


function findMatching (array, string) {
return array.filter(name=> name.toLowerCase()===string.toLowerCase()) 
}


function fuzzyMatch(array, string) {
return array.filter( name => name.indexOf(string) === 0 )
//returns all drivers whose names begin with the provided letters.
//index of those letters in the name must be 0
}

function matchName(array, string) {
    return array.filter(object=> object.name.toLowerCase()===string.toLowerCase()) 
}


