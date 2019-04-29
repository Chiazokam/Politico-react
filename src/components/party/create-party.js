import React, {Component} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Url, Button } from '../global';
import '../../styles/create-party/create-party.scss';

class CreateParty extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem('token');
    this.state = {
      name: '',
      logoUrl: '',
      hqAddress: '',
      errors: {},
      submit: false,
      redirect: false,
      token,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submit: true,
      errors: {},
    });
    const party = {
      name: this.state.name,
      logoUrl: this.state.logoUrl,
      hqAddress: this.state.hqAddress
    };
    const config = {
      headers: {token: this.state.token}
  };
    axios.post(`${Url.herokuUrl}/parties`, party, config)
    .then(() => {
      this.setState({
        submit: false,
        redirect: true
      });
    })
    .catch((error) => {
      this.setState({
        errors: error.response.data.error,
        submit: false
      });
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  render() {
    if (this.state.redirect) return <Redirect to='/view-parties'/>;
    return (
      <div className="create-party">
        <Container>
          <p className='form-text'>Create Party</p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="error">{this.state.errors.message}</div>
              <FormField 
                className='form-field'
                type='text'
                error={this.state.errors.name}
                name='name'
                onFocus={this.clearField.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.name}
                placeholder='Party Name'
              />

              <FormField 
                className='form-field'
                type='text'
                error={this.state.errors.logoUrl}
                name='logoUrl'
                onFocus={this.clearField.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.logoUrl}
                placeholder='Logo Url'
              />

              <FormField 
                className='form-field'
                type='text'
                error={this.state.errors.hqAddress}
                name='hqAddress'
                onFocus={this.clearField.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.hqAddress}
                placeholder='Party Head Quarters'
              />

              <Button
                type="submit"
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

export default CreateParty;
