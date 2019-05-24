import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Url, Button } from '../global';
import { createParty } from '../../actions';
import '../../styles/create-party/create-party.scss';

class CreateParty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logoUrl: '',
      hqAddress: ''
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
    const token = localStorage.getItem('token');
    const config = {
      headers: { token }
   };
   this.props.dispatch(createParty(party, config));
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  render() {
    const { errors, redirect } = this.props;
    if (redirect) return <Redirect to='/parties'/>;
    
    return (
      <div className="create-party">
        <Container>
          <p className='form-text'>Create Party</p>
          <p className='form-info'>All fields are compulsory</p>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="error">{errors.message}</div>
              <FormField 
                className='form-field'
                type='text'
                error={this.props.errors.name}
                name='name'
                onFocus={this.clearField.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.name}
                placeholder='Party Name'
              />

              <FormField 
                className='form-field'
                type='text'
                error={errors.logoUrl}
                name='logoUrl'
                onFocus={this.clearField.bind(this)}
                onChange={this.handleChange.bind(this)}
                value={this.state.logoUrl}
                placeholder='Logo Url'
              />

              <FormField 
                className='form-field'
                type='text'
                error={errors.hqAddress}
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

const mapStateToProps = state => ({
  name: state.party.name,
  logoUrl: state.party.logoUrl,
  hqAddress: state.party.hqAddress,
  errors: state.party.errors,
  submit: state.party.submit,
  redirect: state.party.redirect
});

export default connect(mapStateToProps)(CreateParty);
