// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]



function moveZeros(arr) {
    console.log(arr)
    let final = []
    let numOfZeros = 0
    for (const e of arr) {
      if (e != 0 || e === false || e === true || e === '0' || Array.isArray(e)) final.push(e)
      if (e === 0) numOfZeros++
    }
    for (let i = 0; i < numOfZeros; i++) {
      final.push(0)
    }
    return final
  }