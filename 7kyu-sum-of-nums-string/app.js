// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:

// Input:
// > 6
// Output:
//     0+1+2+3+4+5+6 = 21

// Input:
// > -15
// Output:
//     -15<0

// Input:
// > 0
// Output:
//     0=0


// Parameters: (thoughts, edge cases, etc.)
// Examples:
// Pseudo Code:

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      if (count < 0) {
        return `${count}<0`
      } else if (count === 0) {
        return `0=0`
      } else {
        let str = '0'
        let total = 0
        for(let i = 1; i <= count; i++) {
          console.log(i, count)
          if (i===count) {
            str += `+${i}`
            total += i
            return str += ` = ${total}`
          } else {
            str += `+${i}`
            total += i
          }
          
        }
      }
    };
  
    return SequenceSum;
  