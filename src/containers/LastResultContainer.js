import { connect } from 'react-redux';
import LastResult from '../components/LastResult';

const mapStateToProps = (state) => {
  return {
    lastResult: state.score.lastResult,
    playerAction: state.score.playerAction,
    computerAction: state.score.computerAction
  }
}

export default connect(mapStateToProps, null)(LastResult);