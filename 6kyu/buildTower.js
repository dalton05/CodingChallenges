// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// Go challenge Build Tower Advanced once you have finished this :)




function towerBuilder(numOfFloors) {
    let result = []  
    
    for (let floorNum = 1; floorNum <= numOfFloors; floorNum++) {
      let floorStr = ''
      floorStr =  ' '.repeat(numOfFloors - floorNum)
      floorStr += '*'.repeat(floorNum*2-1)
      floorStr += ' '.repeat(numOfFloors - floorNum)
      result.push(floorStr)
    }
    
    return result
  }