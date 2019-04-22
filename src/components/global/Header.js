import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/home/header.scss';
import NavList from './NavList';


class Header extends Component {
  constructor(props) {
    super (props);
    this.state = { isOpen: false };
  }

  toggleMenu = () => {
    this.setState((prevState, props) => {
      return {
        isOpen: !prevState.isOpen,
      }
    })
  }

  render() {
    let dropdownMenu = 'nav-menu';
    if(this.state.isOpen) {
      dropdownMenu = 'nav-menu-open';
    }

    return (
      <header>
        <div className="container">
            <div className="brandname">
              <h1><a className="brandname-h1" href="#">Politico</a></h1> 
            </div>

            <div className="menu-ham" onClick={this.toggleMenu}>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </div>

            <nav className={ dropdownMenu }>
              <ul>
                {this.props.navItems.map((item) => <NavList key={item}><Link to={`/${item}`}>{item}</Link></NavList>)}
              </ul>
            </nav>
          </div>
      </header>
      )
  }
}

export default Header;
