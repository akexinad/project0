playerTurns: ['playerOne', 'playerTwo', 'playerOne', 'playerTwo', 'playerOne', 'playerTwo', 'playerOne', 'playerTwo', 'playerOne'];

playerTurns: ['cross', 'naught', 'cross', 'naught', 'cross', 'naught', 'cross', 'naught', 'cross', 'naught', 'cross'],

turns: [1, 2, 3, 4, 5, 6, 7, 8, 9],



players: function (array) {
  let newArray = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      return newArray.push('player1');
    } else {
      return newArray.push('player2');
    }
  }
},


playerTurns: function (array) {
  for (let i = 0; i < array.length; i ++) {
    if (array[i] % 2 !== 0) {
      playerOneMoves.push(array[i]);
    } else {
      playerTwoMoves.push(array[i]);
    }
    return playerOneTurn;
    return playerTwoTurn;
  }
}



playerMoves: function (array) {
  let playerOneMoves = [];
  let playerTwoMoves = [];
  for (let i = 0; i < array.length; i ++) {
    if (array[i] % 2 !== 0) {
      playerOneMoves.push(array[i]);
    } else {
      playerTwoMoves.push(array[i]);
    }
    console.log(playerOneMoves);
    console.log(playerTwoMoves);
  }
},


const playerTurns = function (coordinate) {
  let player = 'x';
  if (player === 'x') {
    player = 'o';
  } else {
    player = 'x'
  }
}

///////////// CHECKS WINNING MOVES ///////////////////


const winningCombo = ['a3', 'b2', 'c1'];

const playerMoves = ['c1', 'a2', 'a3', 'b2', 'b1'];

let winningMatches = [];


const arrayCheck = function (playerMoves, winnningCombo) {
  for (let i = 0; i < winningCombo.length; i ++) {
    for (let h = 0; h < playerMoves.length; h ++) {
      if (playerMoves[h] === winningCombo[i]) {
        winningMatches.push('x');
      }
    }
    console.log(winningMatch);
  }
  if (winningMatches.length === 3) {
    console.log('winner');
  } else
  console.log('no winner');
}


arrayCheck(playerMoves, winningCombo);


///////// ADDS CLASS OF NAUGHT OR CROSS ///////////////
  $('#a1').on('click', function () {
    $('#a1').addClass('naught')
  });


////////// LOGGING THE ID OF THE BOX THAT WAS CLICKED //////////////////
  $('.box').on('click', function () {
    console.log($(this).attr('id'));
  });


////////////////////////////////////////////////////////////////////////////////
///////////////////////////  TIC TAC TOE 1.0 ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const ticTacToe = {

  board: [ '', '', '', '', '', '', '', '', ''],

  player: 'x',

  boardCoordinates: ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'],

  winningCombinations: [
                        ['a1' ,'a2', 'a3'],
                        ['b1', 'b2', 'b3'],
                        ['c1', 'c2', 'c3'],
                        ['a1', 'b1', 'c1'],
                        ['a2', 'b2', 'c2'],
                        ['a3', 'b3', 'c3'],
                        ['a1', 'b2', 'c3'],
                        ['a3', 'b2', 'c1']
                      ],

  gameMoves: function () {
    this.playerTurns.push(this.player);
    console.log(this.playerTurns);
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },


  playerMovements: function () {
    for (let i = 0; i < this.coordinatesArray.length; i ++) {
      if (i % 2 === 0) {
        this.playerXMoves.push(this.coordinatesArray[i])
      } else if (i % 2 !== 0) {
        this.playerOMoves.push(this.coordinatesArray[i])
      }
    }
    console.log(`player x: ${ this.playerXMoves }`);
    console.log(`player o: ${ this.playerOMoves }`);
  },





};









$(document).ready(function () {

  $('.box').on('click', function () {
    let $id = $(this).attr('id');
    ticTacToe.coordinatesArray.push($id);
    ticTacToe.gameMoves();
    console.log(ticTacToe.coordinatesArray);
    ticTacToe.playerMovements();
  });

});







console.log('....');

// let counter = 0;
// $('#counter-num').text(counter);
//
// $(document).ready(function () {
//
//   $('.counter-up').click(function (event) {
//      counter++;
//      $('#counter-num').text(counter);
//
//       if (counter == 9) {
//           console.log("YOU DID IT! YOU CLICKED IT 9 TIMES!");
//       }
//   });
//
// });


/////////////////////////////////////////////////////////////////////////////////

const ticTacToe = {

  winningCombinations: [
                        ['a1' ,'a2', 'a3'],
                        ['b1', 'b2', 'b3'],
                        ['c1', 'c2', 'c3'],
                        ['a1', 'b1', 'c1'],
                        ['a2', 'b2', 'c2'],
                        ['a3', 'b3', 'c3'],
                        ['a1', 'b2', 'c3'],
                        ['a3', 'b2', 'c1']
                      ],

};

//
// const checkWinner2 = function (arrayOfArrays, array) {
//   for (let i = 0; i < arrayOfArrays.length; i ++) {
//     for (let k = 0; k < arrayOfArrays[k].length; k ++) {
//       for (let m = 0; m < array.length; m ++) {
//         if (array[m] === arrayOfArrays[i][k]) {
//           winningMatch.push('x');
//           console.log(winningMatch);
//           if (winningMatch.length === 3) {
//             break;
//           }
//         }
//       }
//     }
//   }
//   if (winningMatch.length === 3) {
//     console.log('winner');
//   } else {
//     console.log('?');
//   }
// }


//
// console.log(checkWinner2(ticTacToe.winningCombinations, playerMoves));


const winningCombos = [['a3', 'b2', 'c1'], ['b1', 'b2', 'b3']];

const playerMoves = ['a3', 'b2', 'c1'];

let winningMatch = [];


const checkWinner = function (playerMoves, winningCombos) {
  for (let i = 0; i < winningCombos.length; i ++) {
    console.log(winningCombos[i]);
    let winningComboList = winningCombos[i];
    for (let k = 0; k < winningComboList.length; k ++) {
      for (let m = 0; m < playerMoves.length; m ++) {
        if (playerMoves[m] === winningComboList[k]) {
          winningMatch.push('x');
        }
      }
    }
  }
  if (winningMatch.length === 3) {
    console.log('win');
  } else {
    console.log('lose');
  }
}

checkWinner(playerMoves, winningCombos);
