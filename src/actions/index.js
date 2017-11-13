export const playerWin = (playerAction, computerAction) => ({
  type: 'PLAYER_WIN',
  playerAction: playerAction,
  computerAction: computerAction
})

export const playerLose = (playerAction, computerAction) => ({
  type: 'PLAYER_LOSE',
  playerAction: playerAction,
  computerAction: computerAction
})

export const playerTie = (playerAction, computerAction) => ({
  type: 'PLAYER_TIE',
  playerAction: playerAction,
  computerAction: computerAction
})