import React from 'react';

const NavList = props => {
  return (
    <React.Fragment>
      <li key={props.name}>{props.children}</li>
    </React.Fragment>
    )
}

export default NavList;
