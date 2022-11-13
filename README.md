This is a tic-tac-toe game written exclusively with JavaScript. This program is run in node, and uses Readline-sync to receive inputs from the user. 

The ``const`` ``INTITAL_MARKER`` is a string with a space, indicating that that sqare is empty.

The ``const`` ``HUMAN_MARKER`` is the letter ``'X'`` indicating that the user has selected a square.

The ``const`` ``COMPUTER_MARKER`` is the letter ``'O'`` indicating that the computer has seleced a square. 

The ``const`` ``WINNING_LINES`` is an array of digits that correspond to the squares that would be considered winning lines in rows, columns, or diagonals. The squares on the board are numbered as followed: top row, left square: ``1``, top row, middle square: ``2``, top row, right square: ``3``, middle row, left square: ``4``, middle row, middle square: ``5``, middle row, right square: ``6``, bottom row, left square: ``7``, bottom row, middle square: ``8``, bottom row, right square: ``9``. 

The ``joinOr`` function declared on line 12 formats how the prompt is displayed to the user to select a square. A ``switch`` statement evaluates the empty squares. If there is only one empty square, that choice will be provided to the user. If there are 2 empty squares, the function will insert the word ``'or'`` without a comma between the two empty squares. The default value slices the array from the ``0`` index to the ``index.length - 1``. It is then combined with a comma, the word ``'or'``, and the last index value. 

The ``displayBoard`` function clears the console, and then displays a message ``"You are 'X', the computer is 'O'``. For simplicity this code is written using template literals for ``HUMAN_MARKER`` and ``COMPUTER_MARKER``. The grid lines are displayed using ``console.log`` and a string representing horizontal lines or vertical lines, depending on the location on the board. The areas of each square that receive an input are marked using template literals. They are surrounded by vertical lines on top and below their locations, and are spaced enough to ensure the format is consistent with the rest of the board. 

The ``initializeBoard`` function intializes an empty game board with the intial values to display a blank board. Using a ``for loop``, we iterate through the board squares and set each to their initial value of ``' '``.

On line 55, we are declaring a ``prompt`` function that logs the text we pass to the function to the console. 

The ``emptySquares`` function uses ``filter`` on the ``keys`` of the ``board`` object, and selects the board keys that are strictly equal to the ``INITIAL_MARKER`` constant ``' '``.

The ``boardFull`` function uses the empty squares function to determine if there are no remaining empty squares left on the board. 

The ``findAtRiskSquares`` function takes 3 arguments. The first arqument is ``line``. This ``line`` argument will be the constant ``WINNING_LINES``. The ``board`` argument allows us to access the keys in the board object. The ``marker`` argument will take the ``HUMAN_MARKER`` argument to check if the human marker is one move away from winning the game. The ``markersInLine`` variable uses ``map`` to determine the lines that contain 2 of the human markers. The ``unusedSquare`` variable finds the empty square that the computer can select to prevent the player for winning. The ``findAtRiskSquares`` function makes the computer "play defense" instead of just selecing random squares. 

The ``playerChoosesSquare`` function uses a ``while loop`` to continue prompting the user to select one of the remaining empty squares. If the user enters a value that is invalid, a ``prompt`` will display the message ``'That is not a valid choice.'``. When the user makes a selection, the ``board[square]`` value is updated to the human marker. 

The ``computerChoosesSquare`` function uses a ``for`` loop to iterate through the winning lines to determine if the human player is one move away from winning the game. If the human player is not one move away from winning, the computer will select a random square using a random index value determined by ``Math.floor(Math.random() * emptySquares(board).length)``.

The ``detectWinner`` function checks the board to see if either the human player or the computer have a winning combination. Using a ``for loop`` we iterate through the lines to determine if there are 3 squares that are ``HUMAN_MARKER`` or ``COMPUTER_MARKER`` That are equal to the ``WINNING_LINES`` arrays. 

Using a ``while`` loop, we continue displaying the updated board until the ``someoneWon`` or ``boardFull`` conditions return true. If ``someoneWon`` is true, we use ``prompt`` to display the ``detectWinner`` function to the console. We then ask the player if they want to play again using ``prompt``. If they select ``'y'`` then the loop starts again, if they select ``'n'``, we exit the ``for`` loop and the game concludes. 
