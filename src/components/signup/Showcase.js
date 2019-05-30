import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../styles/signup/signup.scss';
import '../../styles/global/form.scss';
import '../../styles/global/container.scss';
import { Container, FormField, Button } from '../global';
import { signupUser, clearField } from '../../actions';
import { validateImage, uploadImage } from '../../utils';


class SignupShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      submit: false,
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      othername: '',
      phone: '',
      passportUrl: {},
      error: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, othername, phone, email, password, passportUrl} = this.state;
    const { signupUser } = this.props;
    const form = new FormData();
    const isImageValid = validateImage(passportUrl);
    if (isImageValid.valid) {
      form.append('file', passportUrl);
      const response = await uploadImage(form);
      const user = {
        firstname,
        lastname,
        othername,
        phone,
        email,
        password,
        passportUrl: response.url
      }
      signupUser(user);
    } else {
      this.setState({ error: isImageValid.message })
    } 
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  handleFileChange = (e) => {
    this.setState({
      passportUrl: e.target.files[0]
    })
  }

  clearField = (e) => {
    const { clearField } = this.props;
    clearField();
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
          <form onSubmit={this.handleSubmit}>
          <div className="error">{this.state.error}</div>
            <FormField 
              className="form-field" 
              error={this.props.errors.firstname}
              type="text"
              name="firstname"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.firstname} 
              placeholder="First Name"/>

            <FormField
              className="form-field"
              error={this.props.errors.lastname}
              type="text"
              name="lastname"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.lastname} 
              placeholder="Last Name"/>

            <FormField
              className="form-field"
              error={this.props.errors.othername}
              type="text"
              name="othername"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.othername} 
              placeholder="Other Name"/>
          
            <FormField
              className="form-field"
              error={this.props.errors.email}
              type="text"
              name="email"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.email} 
              placeholder="Email Address"/>

            <FormField
              className="form-field"
              error={this.props.errors.phone}
              type="text"
              name="phone"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.phone} 
              placeholder="Phone Number"/>
            
            <FormField
              className="form-field"
              error={this.props.errors.password}
              type="password"
              name="password"
              onChange={this.handleChange}
              onFocus={this.clearField}
              value={this.state.password} 
              placeholder="Password"
            />

            <p className='file-input-text'>Upload a passport</p>
            <FormField
              className="form-field"
              error={this.props.errors.passportUrl}
              type="file"
              name="passportUrl"
              onChange={this.handleFileChange}
              onFocus={this.clearField}
              placeholder="Passport Url"/>
                                            
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

const mapDispatchToProps = {
  signupUser,
  clearField
};

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

const Showcase = connect(mapStateToProps, mapDispatchToProps)(SignupShowcase);

export { Showcase, SignupShowcase };
