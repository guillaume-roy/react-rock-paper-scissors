import React, { Component } from 'react';
import ActionItem from '../ActionItem';
import * as actions from '../../utils/actions';

class ActionList extends Component {
  getComputerRandomAction() {
    return actions.DEFINITION[Object.keys(actions.DEFINITION)[Date.now() % 3]];
  }

  onSelect(action) {
    let computerAction = this.getComputerRandomAction();
    let actionResult = actions.DEFINITION[action.type].rules[computerAction.type];
    switch (actionResult) {
      case -1:
        this.props.playerLose(action, computerAction);
        break;
      case 0:
        this.props.playerTie(action, computerAction);
        break;
      case 1:
        this.props.playerWin(action, computerAction);
        break;
      default:
        throw new Error("Unexpected result");
    }
  }

  render() {
    return (
      <ul className="ActionList list-inline">
        {Object.keys(actions.DEFINITION)
          .map(key => actions.DEFINITION[key])
          .map((action, index) => <li key={index}><ActionItem action={action} onSelect={this.onSelect.bind(this)} /></li>)}
      </ul>
    );
  }
}

export default ActionList;