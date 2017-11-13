import ActionsList from '../components/ActionsList'
import { playerLose, playerTie, playerWin } from '../actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    playerLose: (action, computerAction) => dispatch(playerLose(action, computerAction)),
    playerTie: (action, computerAction) => dispatch(playerTie(action, computerAction)),
    playerWin: (action, computerAction) => dispatch(playerWin(action, computerAction))
  }
}

export default connect(null, mapDispatchToProps)(ActionsList);