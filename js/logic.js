// style the current board on screen
// prevent multiple clicks on the same square
// check for a draw


const ticTacToe = {

  player: 'x',

  board: ['', '', '', '', '', '', '', '', ''],

  playerMoves: function ($id) {
    this.board[$id] = this.player;
    if (this[$id].text() === )
    // add an if statement to prevent multiple entries in a single box.
    ticTacToe.checkWinner(this.player);
    console.log(this.board);
    if (this.player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },

  checkWinner: function (player) {
    if (this.board[0] === player && this.board[1] === player && this.board[2] === player) {
      console.log('win');
    } else if (this.board[3] === player && this.board[4] === player && this.board[5] === player) {
      console.log('win');
    } else if (this.board[6] === player && this.board[7] === player && this.board[8] === player) {
      console.log('win');
    } else if (this.board[0] === player && this.board[3] === player && this.board[6] === player) {
      console.log('win');
    } else if (this.board[1] === player && this.board[4] === player && this.board[7] === player) {
      console.log('win');
    } else if (this.board[2] === player && this.board[5] === player && this.board[8] === player) {
      console.log('win');
    } else if (this.board[0] === player && this.board[4] === player && this.board[8] === player) {
      console.log('win');
    } else if (this.board[2] === player && this.board[4] === player && this.board[6] === player) {
      console.log('win');
    }
  },


};
