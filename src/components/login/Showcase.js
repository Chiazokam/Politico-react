import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Button } from '../global';
import Modal from './Reset-password-modal';
import { showModal, closeModal } from '../../actions';
import '../../styles/login/login.scss';
import { signinUser } from '../../actions';

class LoginShowcase extends Component {
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
    const { signinUser } = this.props;
    signinUser(user);
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  showModal = () => {
    const { showModal } = this.props;
    showModal();
  }

  closeModal = () => {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    if (this.props.redirect && this.props.isAdmin) return <Redirect to='/admin/profile' />;
    else if (this.props.redirect && !this.props.isAdmin) {
      return <Redirect to='/user/profile' />;
    }
    return (
      <div id="main-signin">
        <Container>
        { this.props.isModalOpen && <Modal onClick={this.closeModal}/> }            
          <p className="form-text">Sign In</p>
          <p className='form-info'>All fields are compulsory</p>
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

const mapDispatchToProps = {
  signinUser,
  showModal,
  closeModal
};

const mapStateToProps = state => { 
  return {
    isModalOpen: state.global.isModalOpen,
    submit: state.auth.submit,
    errors: state.auth.loginErrors,
    redirect: state.auth.signinRedirect,
    email: state.auth.email,
    password: state.auth.password,
    isAdmin: state.auth.isAdmin
   };
  }

const Showcase = connect(mapStateToProps, mapDispatchToProps)(LoginShowcase);
 
export { Showcase, LoginShowcase }