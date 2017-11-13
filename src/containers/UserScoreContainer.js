import { connect } from 'react-redux';
import UserScore from '../components/UserScore';

const mapStateToProps = (state) => {
  return {
    total: state.score.total,
    win: state.score.win,
    lose: state.score.lose,
    tie: state.score.tie
  }
}

export default connect(mapStateToProps, null)(UserScore);