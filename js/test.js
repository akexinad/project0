// style the current board on screen
// X prevent multiple clicks on the same square
// X check for a draw


const ticTacToe = {

  player: 'x',

  board: ['', '', '', '', '', '', '', '', ''],

  drawCounter: 0,

  xWinCounter: 0,

  oWinCounter: 0,

  playerMoves: function (id) {
    if (this.board[id] !== '') {
      return false;
    };
    this.drawCounter ++;
    console.log("counter", this.drawCounter);
    this.board[id] = this.player;
    console.log(this.board);
  },

  switchPlayer: function (player) {
    if (player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },

  checkWinner: function (player) {
    if (this.drawCounter === 9) {
      return true;
    }
    if (this.board[0] === player && this.board[1] === player && this.board[2] === player) {
      return true;
    } else if (this.board[3] === player && this.board[4] === player && this.board[5] === player) {
      return true;
    } else if (this.board[6] === player && this.board[7] === player && this.board[8] === player) {
      return true;
    } else if (this.board[0] === player && this.board[3] === player && this.board[6] === player) {
      return true;
    } else if (this.board[1] === player && this.board[4] === player && this.board[7] === player) {
      return true;
    } else if (this.board[2] === player && this.board[5] === player && this.board[8] === player) {
      return true;
    } else if (this.board[0] === player && this.board[4] === player && this.board[8] === player) {
      return true;
    } else if (this.board[2] === player && this.board[4] === player && this.board[6] === player) {
      return true;
    }
  },

  resetGame: function () {
    this.player = 'x';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.drawCounter = 0;
  },

  whoWinning: function () {
    if (this.checkWinner(this.player) && this.player === 'x') {
      this.xWinCounter ++;
      console.log('x points: ', this.xWinCounter);
    } else if (this.checkWinner(this.player) && this.player === 'o') {
      this.oWinCounter ++;
      console.log('o points: ', this.oWinCounter);
    }
  }

};
