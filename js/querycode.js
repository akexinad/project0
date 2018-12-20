const render = function () {
  for (let i = 0; i < ticTacToe.board.length; i++) {
    $(`#${ i }`).text( ticTacToe.board[i] );
  };

  if (ticTacToe.drawCounter === "draw") {
    $('.draw-box').css("visibility", "visible");
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'x') {
    $('.x-box').css("visibility", "visible");
    $('.x-points').html(`X: ${ ticTacToe.xWinCounter }`);
    return;
  } else if (ticTacToe.checkWinner(ticTacToe.player) && ticTacToe.player === 'o') {
    $('.o-box').css("visibility", "visible");
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
    $('.box').text('');
    $('.x-box').css('visibility', 'hidden');
    $('.o-box').css('visibility', 'hidden');
    $('.draw-box').css('visibility', 'hidden');
  });

});
