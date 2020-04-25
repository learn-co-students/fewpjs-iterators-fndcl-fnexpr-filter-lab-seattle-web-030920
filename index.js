// Code your solution here


function findMatching(drivers, string){
    return drivers.filter(n => {return n.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
    const chars = string.length
    return drivers.filter(n => (n.slice(0,chars) === string) )
}

function matchName(drivers, string){
    return drivers.filter(n => (n.name === string))
}