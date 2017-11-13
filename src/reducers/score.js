const initialState = {
  win: 0,
  tie: 0,
  lose: 0,
  total: 0,
  computerAction: null,
  playerAction: null,
  lastResult: null
}

const score = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_WIN":
      console.log("PLAYER_WIN");
      return Object.assign({}, state, {
        win: state.win + 1,
        total: state.total + 1,
        lastResult: 'win',
        computerAction: action.computerAction,
        playerAction: action.playerAction
      })
    case "PLAYER_LOSE":
      console.log("PLAYER_LOSE");
      return Object.assign({}, state, {
        lose: state.lose + 1,
        total: state.total + 1,
        lastResult: 'lose',
        computerAction: action.computerAction,
        playerAction: action.playerAction
      })
    case "PLAYER_TIE":
      console.log("PLAYER_TIE");
      return Object.assign({}, state, {
        tie: state.tie + 1,
        total: state.total + 1,
        lastResult: 'tie',
        computerAction: action.computerAction,
        playerAction: action.playerAction
      })
    default:
      return state;
  }
}

export default score