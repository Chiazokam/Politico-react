import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import '../../styles/signup/signup.scss';
import '../../styles/global/form.scss';
import '../../styles/global/container.scss';
import { Container, FormField, Url, Button } from '../global';

class Showcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othername: '',
      email: '',
      phone: '',
      passportUrl: '',
      password: '',
      errors: {},
      redirect: false,
      submit: false
    };
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.setState({
     errors: {},
     submit: true,
    });
    const user = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      othername: this.state.othername,
      email: this.state.email,
      phone: this.state.phone,
      passportUrl: this.state.passportUrl,
      password: this.state.password
    };
    axios.post(`${Url.herokuUrl}/auth/signup`, user)
    .then((response) => this.setState({
        redirect: true,
        submit: false,
      }))
    .catch((error) => {
      this.setState({
        errors: error.response.data.error,
        submit: false,
      })
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  } 

  render() {
    if (this.state.redirect) {
      return <Redirect to='/login' />;
    }
    return (
      <div className="main-signup">
          <Container>

          <p className="form-text">Sign Up</p>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormField 
              className="form-field" 
              error={this.state.errors.firstname}
              type="text"
              name="firstname"
              onChange={this.handleChange.bind(this)}
              value={this.state.firstname} 
              placeholder="First Name"/>

            <FormField
              className="form-field"
              error={this.state.errors.lastname}
              type="text"
              name="lastname"
              onChange={this.handleChange.bind(this)}
              value={this.state.lastname} 
              placeholder="Last Name"/>

            <FormField
              className="form-field"
              error={this.state.errors.othername}
              type="text"
              name="othername"
              onChange={this.handleChange.bind(this)}
              value={this.state.othername} 
              placeholder="Other Name"/>
          
            <FormField
              className="form-field"
              error={this.state.errors.email}
              type="text"
              name="email"
              onChange={this.handleChange.bind(this)}
              value={this.state.email} 
              placeholder="Email Address"/>

            <FormField
              className="form-field"
              error={this.state.errors.phone}
              type="text"
              name="phone"
              onChange={this.handleChange.bind(this)}
              value={this.state.phone} 
              placeholder="Phone Number"/>

            <FormField
              className="form-field"
              error={this.state.errors.passportUrl}
              type="text"
              name="passportUrl"
              onChange={this.handleChange.bind(this)}
              value={this.state.passportUrl} 
              placeholder="Passport Url"/>

            <FormField
              className="form-field"
              error={this.state.errors.password}
              type="password"
              name="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password} 
              placeholder="Password"/>
                                            
            <Button
              className="btn btn-colored btn-signup btn-dark">
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
