import React, { Component } from 'react';
import { FormField, Button } from '../global';

class ResetPasswordModal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="forgotPassword-modal">
          <p>We will send you an email</p>
          <form>
            <FormField
              className="form-field forgotPassword"
              type="email"
              name="email"
              placeholder="Email"
              />
            <Button className="btn btn-cancel-modal"><div onClick={this.props.onClick}>Cancel</div></Button>
            <Button className="btn btn-submit-modal"><div>Send</div></Button>
          </form>
        </div>
      </div>
    )
  }
}

export default ResetPasswordModal;
