// Given an integral number, determine if it's a square number:

// Examples:
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

// Parameters: (thoughts, edge cases, etc.)
// Examples:
// Pseudo Code:

var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) ? true : false
  }