import React, { Component } from 'react';
import './style.css';

class LastResult extends Component {
  render() {
    if(!this.props.playerAction || !this.props.computerAction || !this.props.lastResult) {
      return null;
    }

    return (
      <div className="LastResult">
        <h4>Last Result : <span className={this.props.lastResult}>{this.props.lastResult}</span></h4>
        <div><b>You :</b> {this.props.playerAction.name}</div>
        <div><h5><sup>VS</sup></h5></div>
        <div><b>CPU :</b> {this.props.computerAction.name}</div>
      </div>
    );
  }
}

export default LastResult;