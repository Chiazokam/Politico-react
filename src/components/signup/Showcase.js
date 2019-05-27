import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../styles/signup/signup.scss';
import '../../styles/global/form.scss';
import '../../styles/global/container.scss';
import { Container, FormField, Button } from '../global';
import { signupUser, clearField } from '../../actions'


class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      submit: false,
      signupDetails: {}
    };
  }

  handleSubmit = (e) => {
   e.preventDefault();
    const { signupDetails } = this.state;
    this.props.dispatch(signupUser(signupDetails));
  }

  handleChange = (e) => {
    const { signupDetails } = this.state;
    signupDetails[e.target.name] = e.target.value;
    this.setState({ signupDetails })
  }

  clearField = (e) => {
    this.props.dispatch(clearField());
  }

  render() {
    if (this.props.redirect) {
      return <Redirect to='/login' />;
    }
    return (
      <div className="main-signup">
          <Container>

          <p className="form-text">Sign Up</p>
          <p className='form-info'>All fields are compulsory</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
          { this.props.isOpen && this.handleErrors}
            <FormField 
              className="form-field" 
              error={this.props.errors.firstname}
              type="text"
              name="firstname"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.firstname} 
              placeholder="First Name"/>

            <FormField
              className="form-field"
              error={this.props.errors.lastname}
              type="text"
              name="lastname"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.lastname} 
              placeholder="Last Name"/>

            <FormField
              className="form-field"
              error={this.props.errors.othername}
              type="text"
              name="othername"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.othername} 
              placeholder="Other Name"/>
          
            <FormField
              className="form-field"
              error={this.props.errors.email}
              type="text"
              name="email"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.email} 
              placeholder="Email Address"/>

            <FormField
              className="form-field"
              error={this.props.errors.phone}
              type="text"
              name="phone"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.phone} 
              placeholder="Phone Number"/>

            <FormField
              className="form-field"
              error={this.props.errors.passportUrl}
              type="text"
              name="passportUrl"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.passportUrl} 
              placeholder="Passport Url"/>

            <FormField
              className="form-field"
              error={this.props.errors.password}
              type="password"
              name="password"
              onChange={this.handleChange.bind(this)}
              onFocus={this.clearField.bind(this)}
              value={this.state.password} 
              placeholder="Password"/>
                                            
            <Button
              className="btn btn-colored btn-signup btn-dark">
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
    submit: state.auth.submit,
    errors: state.auth.signupErrors,
    redirect: state.auth.signupRedirect,
    firstname: state.auth.firstname,
    lastname: state.auth.lastname,
    othername: state.auth.othername,
    email: state.auth.email,
    phone: state.auth.phone,
    passportUrl: state.auth.passportUrl,
    password: state.auth.password,
    isOpen: state.auth.isOpen
   };
  }

export default connect(mapStateToProps)(Showcase);
