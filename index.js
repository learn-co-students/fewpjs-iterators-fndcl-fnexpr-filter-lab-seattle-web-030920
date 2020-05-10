function findMatching(array, string){
  return  array.filter(driver => driver.toUpperCase() === string.toUpperCase())
}

function fuzzyMatch(array, string){
    return array.filter(driver => {
        let length = string.length
        return driver.slice(0, length).toUpperCase() === string.toUpperCase()
    })
}

function matchName(array, string){
    return array.filter(element => {
        return element.name.toUpperCase() === string.toUpperCase()
    })
}