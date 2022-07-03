// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


var uniqueInOrder=function(iterable){
  
    console.log(iterable)
    
    if (iterable.length === 0) return []
    
    if (typeof iterable === 'string') iterable = iterable.split('')
    
    let final = [iterable[0]]
    
    iterable.reduce((p,c) => {
      if (c != p) final.push(c)
      return c
    })
  
    return final
  }