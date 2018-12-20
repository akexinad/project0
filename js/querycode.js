const render = function () {
  for (let i = 0; i < ticTacToe.board.length; i++) {
    $(`#${ i }`).text( ticTacToe.board[i] );
  }
  // console.log(ticTacToe.checkWinner(ticTacToe.player), ticTacToe.player);
  if (ticTacToe.drawCounter === 9) {
    $('.draw-box').css("visibility", "visible");
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'x') {
    $('.x-box').css("visibility", "visible");
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'o') {
    $('.o-box').css("visibility", "visible");
    return;
  }

};


$(document).ready(function () {

  $('.box').on('click', function () {
    let $id = $(this).attr('id');
    ticTacToe.playerMoves($id);
    ticTacToe.checkWinner(ticTacToe.player);
    render();
    ticTacToe.whoWinning();
    ticTacToe.switchPlayer(ticTacToe.player);
  });

  $('.reset-button').on('click', function () {
    ticTacToe.resetGame();
    $('.box').text('');
    $('.x-box').css('visibility', 'hidden');
    $('.o-box').css('visibility', 'hidden');
    $('.draw-box').css('visibility', 'hidden');

  });



});
