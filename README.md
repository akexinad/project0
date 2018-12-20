A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

# TIC TAC TOE

## Methodology

The entire logic of the game is contained within an object called ticTacToe. It begins with the following parameters:

- Player x as the default player 1, switching between the two players using an if else statement in the ticTacToe.switchPlayer() function.
- An array consisting of 8 items of null as the starting board. The array index corresponds to the html id's of the div's whose class is 'box'. The null items are replaced with either an X or an O via the playerMoves() function.
- Two counters, xWinCounter and oWinCounter, for X and O wins.
- One counter for a draw, the drawCounter. Within the playerMoves() function, the counter counts how many items in the board array have been replaced with either an X or an O. If all items have been replaced and a win has not been decided, then a draw is called.

The game logic begins the execution of the playerMoves() function. The argument that it takes corresponds to the id of an html div where the game is to be played via jQuery.

The playerMoves function then passes on to another called the checkWinner() function and first checks for all possible winning combinations on the board array. If it is still to early to declare a win, the function returns false, adds one to the drawCounter and adds the player symbol on the board index corresponding to the id the player has chosen. It then calls the switchPlayer function which switches the player variable from 'x' to 'o'.

These steps are repeated until a player either chooses the winning combinations, which will return true in the checkWinner function. If all id's have been chosen and no combinations match it returns a draw, and the logic resets.


## Problems encountered

The vast majority my problems were purely concerned with the fact of my novice skills, such as using incorrect j-query syntax, html and css positioning concerns, and the execution of functions in the incorrect order in the logic realm as well as within the jquery realm.

My biggest challenge was getting the checkWinner function to execute the correct outcome when all but one id were taken. On the last move when X would the chance to win, instead of displaying the 'X wins box'. The checkWinner would log a 'draw', however, the x-point counter would still increase by one. So to counter this I moved the ```if (drawCounter === 9)``` argument to the bottom of checkWinner(). However, this produced the same defect but inversely. That is, when it was actually a draw the display would show that X had won the game.

My instructor came to the conclusion that the issue lay in the fact that, regardless of O winning, X winning, or a draw, the return values were all identical. Thus, the solution was to differentiate the return value for 'draw' in order make a more succinct distinction. We added an extra line to return value of ```if (drawCounter === 9)``` which was ```this.drawCounter = 'draw'``` then the argument would return true. This seems to have fixed the error entirely after copious hours of freaking the fuck out.

### Unsolved Problems

Never got the chance to attempt the AI or most of the bonus functionality.
