const render = function () {
  for (let i = 0; i < ticTacToe.board.length; i++) {
    // $(`#${ i }`).text( ticTacToe.board[i] );
    if (ticTacToe.board[i] === 'x') {
      $(`#${ i }`).addClass('x');
    } else if (ticTacToe.board[i] === 'o') {
      $(`#${ i }`).addClass('o');
    }
  }

  if (ticTacToe.drawCounter === "draw") {
    $('.draw-box').css("visibility", "visible").hide().fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'x') {
    $('.x-box').css("visibility", "visible").hide().fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    $('.x-points').html(`X: ${ ticTacToe.xWinCounter }`);
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'o') {
    $('.o-box').css("visibility", "visible").hide().fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
    $('.o-points').html(`O: ${ ticTacToe.oWinCounter }`);
    return;
  };

};


$(document).ready(function () {

  $('.box').on('click', function () {
    let $id = $(this).attr('id');
    ticTacToe.playerMoves($id);
    ticTacToe.checkWinner(ticTacToe.player);
    ticTacToe.winCounter();
    render();
    ticTacToe.switchPlayer(ticTacToe.player);
  });

  $('.reset-button').on('click', function () {
    ticTacToe.resetGame();
    $('.box').removeClass('x').removeClass('o').text('');
    $('.x-box').css('visibility', 'hidden');
    $('.o-box').css('visibility', 'hidden');
    $('.draw-box').css('visibility', 'hidden');
    $('.x-points').text('X: 0');
    $('.o-points').text('O: 0');
  });

  $('.play-again-button').on('click', function () {
    ticTacToe.playAgain();
    $('.box').removeClass('x').removeClass('o').text('');
    $('.x-box').css('visibility', 'hidden');
    $('.o-box').css('visibility', 'hidden');
    $('.draw-box').css('visibility', 'hidden');
  });

});
