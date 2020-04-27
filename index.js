// // Code your solution here
// let drivers = ["assam", "jake", "Jake"]
// let letters = "ass"
let name = "Bobby"
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name){
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
} 

// console.log(findMatching(drivers, name))

function fuzzyMatch(drivers, letters){
    
    return drivers.filter(driver => {
        
        return driver.slice(0,letters.length).toLowerCase() === letters.toLowerCase()
    })
}

// console.log(fuzzyMatch(drivers, letters))

function matchName(drivers, name){
    return drivers.filter(driver => {
        return driver.name === name 
    })
}

// console.log(matchName(drivers, name))