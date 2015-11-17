/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brand-image" src="http://hugo.grochau.com/i/logo@2x.png"/>
          </a>
          <Navigation className="Header-nav" />
      </div>
    );
  }

}

export default Header;
