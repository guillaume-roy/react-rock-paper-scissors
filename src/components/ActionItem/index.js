import React, { Component } from 'react';
import './style.css';

class ActionItem extends Component {
  render() {
    return (
      <div className="ActionItem" onClick={() => this.props.onSelect(this.props.action)}>
        <h3>{this.props.action.name}</h3>
        <img src={this.props.action.icon} alt={this.props.action.name} title={this.props.action.name} />
      </div>
    );
  }
}

export default ActionItem;