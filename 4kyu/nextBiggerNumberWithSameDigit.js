// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil



function nextBigger(n) {
    const str = new String(n)        
    
    for (let i = str.length-1; i; i--) {
      if (str[i] > str[i-1]) { 
        const strBeg = str.slice(0, i-1)
        let strMid = Number(str[i-1])
        let endArr = str.slice(i).split('').sort().map(e=>Number(e))
  
        for(let i=0;i<endArr.length;i++) {
          if (endArr[i] > strMid) {
            const temp = endArr[i]
            endArr.splice(i,1,strMid)
            strMid = temp
            break;
          } 
        }
         
        return Number(strBeg + strMid + endArr.join(''))
      }
    }
    return -1
  }