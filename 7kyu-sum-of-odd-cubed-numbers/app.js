// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.





function cubeOdd(arr) {
    let result = 0
    for (let n of arr) {
      if (!Number.isInteger(n)) return undefined
      result += n % 2 === 0 ? 0 : n**3
    }
    return result
  }