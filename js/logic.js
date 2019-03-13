const ticTacToe = {

  player: 'x',

  board: ['', '', '', '', '', '', '', '', ''],

  xWinCounter: 0,

  oWinCounter: 0,

  drawCounter: 0,

  // Checks for or draw with a series of if statements that match the box class id's to the board array id's.
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

  // checks the board items to see if they have been already chosen by X or O depending on what id the player has chosen. If not, play on, if they have been chosen, it returns false.
  playerMoves: function (id) {
    this.checkWinner(this.player);
    if (this.board[id] !== '') {
      return false;
    };
    this.drawCounter ++;
    this.board[id] = this.player;
  },

  //
  switchPlayer: function (player) {
    if (player === 'x') {
      this.player = 'o';
    } else {
      this.player = 'x';
    }
  },

  // when the reset button is pressed, it sets the player to default, board array items to null and zeros all counters.
    resetGame: function () {
    this.player = 'x';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.drawCounter = 0;
    this.xWinCounter = 0;
    this.oWinCounter = 0;
  },

  // similar to reset but will keep point score.
  playAgain: function () {
    this.player = 'x';
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.drawCounter = 0;
  },

  

  // executes checkWinner() to check win or draw and adds point to respective player.
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
