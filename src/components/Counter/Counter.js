/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './Counter.css';
import withStyles from '../../decorators/withStyles';
import CountStore from '../../stores/CountStore';
import SystemActions from '../../actions/SystemActions';

@withStyles(styles)
class Counter extends Component {

  static propTypes = {
    counterValue: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this._onStoreChange = () => this.getState();
  }

  componentDidMount() {
    CountStore.addListener('change', this._onStoreChange);
  }

  componentWillUnmount() {
    CountStore.removeListener('change', this._onStoreChange);
  }

  getState() {
    const count = CountStore.getCount();
    this.setState({'counter': count});
  }

  handleAddClick() {
    SystemActions.addValue(3);
  }

  handleRemoveClick() {
    SystemActions.removeValue(2);
  }

  render() {
    return (
      <div className="Counter">
        <span className="Counter-value">{this.state.counter}</span>
        <button className="Counter-add-button" onClick={this.handleAddClick}>Add</button>
        <button className="Counter-remove-button" onClick={this.handleRemoveClick}>Remove</button>
      </div>
    );
  }

}

export default Counter;
