import React, { Component } from 'react';
import styles from './SurgeryList.css';
import SurgeryStore from '../../stores/SurgeryStore';
import withStyles from '../../decorators/withStyles';

function getStateFromStores() {
  return {
    surgeries: SurgeryStore.getAll(),
  };
}

@withStyles(styles)
class SurgeryList extends Component {

  constructor() {
    super();
    this.state = getStateFromStores();

    this._onStoreChange = this._onStoreChange.bind(this);
  }

  componentDidMount() {
    SurgeryStore.addListener('change', this._onStoreChange);
  }

  componentWillUnmount() {
    SurgeryStore.removeListener('change', this._onStoreChange);
  }

  getSurgeryItem(surgery) {
    return (
      <div className="Surgery">
        <span className="Surgery-surgeon-name">{surgery.surgeonName}</span>
        <span className="Surgery-surgeon-specialty">{surgery.surgeonSpecialty}</span>
        <span className="Surgery-surgeon-crm">{surgery.surgeonCRM}</span>
      </div>);
  }

  _onStoreChange() {
    this.setState(getStateFromStores());
  }

  render() {
    const surgeryList = this.state.surgeries.map( surgery => {
      const surgeryItem = this.getSurgeryItem(surgery);
      return (
        <li className="SurgeryList-item">
          {surgeryItem}
        </li>);
    });
    return (
      <div className="SurgeryList">
        <ul className="SurgeryList-list">
          {surgeryList}
        </ul>
      </div>
    );
  }

}

export default SurgeryList;
