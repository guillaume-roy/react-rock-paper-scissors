import React, { Component } from 'react';
import ActionsListContainer from '../../containers/ActionsListContainer';
import UserScoreContainer from '../../containers/UserScoreContainer';
import LastResultContainer from '../../containers/LastResultContainer';
import logo from '../../icons/logo.svg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rock, Paper, Scissors Game <sup>Based on React</sup></h1>
        </header>
        <p><i>You can find the rules <a href="https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors" target="_blank" rel="noopener noreferrer">here</a></i>.</p>
        <p className="App-intro">Choose an action :</p>

        <ActionsListContainer />
        <LastResultContainer />
        <UserScoreContainer />
      </div>
    );
  }
}

export default App;
