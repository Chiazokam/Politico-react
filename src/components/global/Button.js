import React, {Component} from 'react';
import '../../styles/global/button.scss';

class Button extends Component {
  render() {
    return (
      <React.Fragment>
          <button type="submit" className={this.props.className}>
            {this.props.children}
          </button>
      </React.Fragment>
    )
  }
}

export default Button;
