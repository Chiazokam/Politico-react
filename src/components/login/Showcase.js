import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Url, Button } from '../global';
import Modal from './Reset-password-modal';
import { showModal, closeModal } from '../../actions';
import '../../styles/login/login.scss';
import { signinUser } from '../../actions';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      redirect: false,
      decode: false,
      submit: false
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.dispatch(signinUser(user));
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  showModal = () => {
    this.props.dispatch(showModal());
  }

  closeModal = () => {
    this.props.dispatch(closeModal());
  }

  render() {
    if (this.props.redirect && this.props.isAdmin) return <Redirect to='/admin-profile' />;
    else if (this.props.redirect && !this.props.isAdmin) {
      return <Redirect to='/user-profile' />;
    }
    return (
      <div id="main-signin">
        <Container>
        { this.props.isModalOpen && <Modal onClick={this.closeModal}/> }            
          <p className="form-text">Sign In</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="error">{this.props.errors.message}</div>
            <FormField 
              className="form-field"
              error={this.props.errors.email}
              type="email"
              onChange={this.handleChange}
              onFocus={this.clearField}
              name="email"
              value={this.state.email}
              placeholder="Email Address"
            />

            <FormField 
              className="form-field password-field"
              error={this.props.errors.password}
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
              { this.props.submit && <FontAwesomeIcon 
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

const mapStateToProps = state => { 
  return {
    isModalOpen: state.global.isModalOpen,
    submit: state.auth.submit,
    errors: state.auth.loginErrors,
    redirect: state.auth.redirect,
    email: state.auth.email,
    password: state.auth.password,
    isAdmin: state.auth.isAdmin
   };
  }

export default connect(mapStateToProps)(Showcase);
 