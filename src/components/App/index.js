import React, { Component } from 'react';
import ActionsList from '../ActionsList';
import UserScore from '../UserScore';
import LastResult from '../LastResult';
import * as actions from '../../utils/actions';
import logo from '../../icons/logo.svg';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerAction: null,
      playerAction: null,
      lastResult: null,
      win: 0,
      tie: 0,
      lose: 0,
      total: 0
    };
  }

  getComputerRandomAction() {
    return actions.DEFINITION[Object.keys(actions.DEFINITION)[Date.now() % 3]];
  }

  onSelectAction(playerAction) {
    let computerAction = this.getComputerRandomAction();
    let actionResult = actions.DEFINITION[playerAction.type].rules[computerAction.type];
    let newState = {
      computerAction: computerAction,
      playerAction: playerAction,
      total: this.state.total + 1,
    };

    switch (actionResult) {
      case -1:
        newState.lose = this.state.lose + 1;
        newState.lastResult = "lose";
        break;
      case 0:
        newState.tie = this.state.tie + 1;
        newState.lastResult = "tie";
        break;
      case 1:
        newState.win = this.state.win + 1;
        newState.lastResult = "win";
        break;
      default:
        throw new Error("Unexpected result");
    }

    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rock, Paper, Scissors Game <sup>Based on React</sup></h1>
        </header>
        <p><i>You can find the rules <a href="https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors" target="_blank" rel="noopener noreferrer">here</a></i>.</p>
        <p className="App-intro">Choose an action :</p>

        <ActionsList actions={actions.DEFINITION} onSelectAction={this.onSelectAction.bind(this)} />
        <LastResult playerAction={this.state.playerAction} computerAction={this.state.computerAction} lastResult={this.state.lastResult} />
        <UserScore total={this.state.total} win={this.state.win} lose={this.state.lose} tie={this.state.tie} />
      </div>
    );
  }
}

export default App;
