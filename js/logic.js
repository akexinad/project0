const ticTacToe = {

  player: 'x',

  board: ['', '', '', '', '', '', '', '', ''],

  xWinCounter: 0,

  oWinCounter: 0,

  drawCounter: 0,

  playerMoves: function (id) {
    this.checkWinner(this.player);
    if (this.board[id] !== '') {
      return false;
    };
    this.drawCounter ++;
    this.board[id] = this.player;
  },

  switchPlayer: function (player) {
    if (player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },

  checkWinner: function (player) {
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
    } else if (this.drawCounter === 9) {
      this.drawCounter = "draw";
      return true;
    }
  },

  resetGame: function () {
    this.player = 'x';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.drawCounter = 0;
    this.xWinCounter = 0;
    this.oWinCounter = 0;
  },

  playAgain: function () {
    this.player = 'x';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.drawCounter = 0;
  },

  winCounter: function () {
    if (ticTacToe.drawCounter === "draw") {
      return;
    } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'x') {
      return this.xWinCounter ++;
    } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'o') {
      return this.oWinCounter ++;
    };
  },

};
