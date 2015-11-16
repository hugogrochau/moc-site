/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-link" href="/agendamentos" onClick={Link.handleClick}>Agendamentos</a>
        <a className="Navigation-link" href="/historicos" onClick={Link.handleClick}>Histórico</a>
        <a className="Navigation-link" href="/relatorios" onClick={Link.handleClick}>Relatórios</a>
      </div>
    );
  }

}

export default Navigation;
