import React from 'react';
import styles from './Header.scss';
import {NavLink, Link} from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search';


class Header extends React.Component {

  static propTypes = {
    image: PropTypes.string,
  }


  render() {
    // const {image} = this.props;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.header.headerIcon} />
            </Link>

            <Search className={styles.input} />
            
            <nav>
              <NavLink exact to='/' activeClassName='active'>{settings.header.goHome}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{settings.header.goInfo}</NavLink>
              <NavLink exact to='/FAQ' activeClassName='active'>{settings.header.goFAQ}</NavLink>
            </nav>  
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;