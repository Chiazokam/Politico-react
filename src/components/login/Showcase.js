import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Url, Button } from '../global';
import Modal from './Reset-password-modal';
import '../../styles/login/login.scss';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      redirect: false,
      decode: false,
      submit: false,
      isModalOpen: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submit: true,
      errors: {},
    });
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios.post(`${Url.herokuUrl}/auth/login`, user)
    .then((response) => {
      const { token, user } = response.data.data[0];
      const { id } = user;
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);

      const base64Url = token.split('.')[1];
      const decode = JSON.parse(window.atob(base64Url));
      this.setState({
        redirect: true,
        decode: decode.isAdmin,
        submit: false
      });
    })
    .catch((error) => {
      this.setState({
        errors: error.response.data.error,
        submit: false
      });
    })
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  showModal = () => {
    this.setState({ isModalOpen: true })
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    if (this.state.redirect && this.state.decode) return <Redirect to='/admin-profile' />;
    else if (this.state.redirect && !this.state.decode) {
      return <Redirect to='/user-profile' />;
    }
    return (
      <div id="main-signin">
        <Container>
        { this.state.isModalOpen && <Modal onClick={this.closeModal.bind(this)}/> }                   
          <p className="form-text">Sign In</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="error">{this.state.errors.message}</div>
            <FormField 
              className="form-field"
              error={this.state.errors.email}
              type="email"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              name="email"
              value={this.state.email}
              placeholder="Email Address"
            />

            <FormField 
              className="form-field password-field"
              error={this.state.errors.password}
              type="password"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              name="password"
              value={this.state.password}
              placeholder="Password"
            />
                                            
            <p id="forgotPass" onClick={this.showModal.bind(this)}>Forgot Password?</p>
            <Button
              className="btn btn-colored btn-signin btn-dark">
              { this.state.submit && <FontAwesomeIcon 
                  icon={ faSpinner }
                  spin
                /> }
                &nbsp; Submit
            </Button>
          </form>
        </Container>
       </div>
    )
  }
}

export default Showcase;
