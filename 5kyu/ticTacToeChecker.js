// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]

// We want our function to return:

//     -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//     1 if "X" won,
//     2 if "O" won,
//     0 if it's a cat's game (i.e. a draw).

// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.









function isSolved(board) {
    const winningConfigs = [[[0,0], [1,0], [2,0]],       // columns
                            [[0,1], [1,1], [2,1]],
                            [[0,2], [1,2], [2,2]],
                            [[0,0], [0,1], [0,2]],       // rows
                            [[1,0], [1,1], [1,2]],
                            [[2,0], [2,1], [2,2]],
                            [[0,0], [1,1], [2,2]],       // diagonals
                            [[0,2], [1,1], [2,0]],]
    


    let result = 0                                       // default draw
    


    for (const p of board) {                             // check if finished game
      if (p.includes(0)) result = -1
    }
    


    winningConfigs.forEach((e,i,a) => {                  // loop through winningConfigs
      const p1 = board[e[0][0]][e[0][1]]
      const p2 = board[e[1][0]][e[1][1]]
      const p3 = board[e[2][0]][e[2][1]]
          
      if (p1 === p2 && p2 === p3 && p3 != 0) result = p1  // check for winner
    })
    
    
    
    return result
  }