import React, { Component } from 'react';

class UserScore extends Component {
  render() {
    return (
      <div className="UserScore">
        <h4>Your Score :</h4>
        <ul className="list-inline">
          <li>Total = {this.props.total}</li>
          <li>Win = {this.props.win}</li>
          <li>Lose = {this.props.lose}</li>
          <li>Tie = {this.props.tie}</li>
        </ul>
      </div>
    );
  }
}

export default UserScore;