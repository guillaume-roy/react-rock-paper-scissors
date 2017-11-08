import React, { Component } from 'react';
import ActionItem from '../ActionItem';

class ActionList extends Component {
  render() {
    return (
      <ul className="ActionList list-inline">
        {Object.keys(this.props.actions)
          .map(key => this.props.actions[key])
          .map((action, index) => <li key={index}><ActionItem action={action} onSelect={this.props.onSelectAction} /></li>)}
      </ul>
    );
  }
}

export default ActionList;