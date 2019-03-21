import React, {Component} from 'react';

class Hamburger extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="menu-ham">
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
        </div>
      </React.Fragment>
    )
  }
}

export default Hamburger;
