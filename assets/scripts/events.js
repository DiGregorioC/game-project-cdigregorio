

const checkForWin = (gameBoard) => {
  if (
    gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === "X"
  ) console.log('X Wins!')
}




module.exports = {
  checkForWin
}
