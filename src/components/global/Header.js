import React from 'react';
import Hamburger from '../home/Hamburger';
import '../../styles/home/header.scss';
import NavList from './NavList';

const Header = props => {
  return (
    <header>
      <div className="container">
          <div className="brandname">
            <h1><a className="brandname-h1" href="#">Politico</a></h1> 
          </div>
          <Hamburger />
          <nav className="nav-menu">
            <ul>
              {props.navItems.map((item) => <NavList key={item}>{item}</NavList>)}
            </ul>
          </nav>
        </div>
    </header>
    )
}

export default Header;
