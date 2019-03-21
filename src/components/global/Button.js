import React, {Component} from 'react';
import '../../styles/global/button.scss'

class Button extends Component {
  render() {
    return (
      <React.Fragment>
        <a>
          <button type="button" className={this.props.className}>
            {this.props.children}
          </button>
        </a>
      </React.Fragment>
    )
  }
}

export default Button;
