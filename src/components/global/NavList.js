import React from 'react';

const NavList = props => {
  return (
    <React.Fragment>
      <li key={props.name}><a href="#">{props.children}</a></li>
    </React.Fragment>
    )
}

export default NavList;
