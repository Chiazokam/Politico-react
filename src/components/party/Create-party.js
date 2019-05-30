import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Button } from '../global';
import { createParty, getParties } from '../../actions';
import '../../styles/create-party/create-party.scss';
import { uploadImage, validateImage }  from '../../utils';

class CreatePartyUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logoUrl: {},
      hqAddress: '',
      error: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({
      submit: true,
      errors: {},
    });
    const { name, logoUrl, hqAddress } = this.state;
    const form = new FormData();
    const isImageValid = validateImage(logoUrl);
    if (isImageValid.valid) {
      form.append('file', logoUrl);
      const response = await uploadImage(form);

      const party = {
        name,
        logoUrl: response.url,
        hqAddress
      };
      const { parties, createParty } = this.props;
      createParty(party);
      parties();
    } else {
      this.setState({ error: isImageValid.message })
    } 
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  handleFileChange = (e) => {
    this.setState({
      logoUrl: e.target.files[0]
    })
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  render() {
    const { errors, redirect, submit } = this.props;
    if (redirect) return <Redirect to='/parties'/>;
    
    return (
      <div className="create-party">
        <Container>
          <p className='form-text'>Create Party</p>
          <p className='form-info'>All fields are compulsory</p>
            <form onSubmit={this.handleSubmit}>
              <div className="error">{errors.message || this.state.error}</div>
              <FormField 
                className='form-field'
                type='text'
                error={this.props.errors.name}
                name='name'
                onFocus={this.clearField}
                onChange={this.handleChange}
                value={this.state.name}
                placeholder='Party Name'
              />

              <FormField 
                className='form-field'
                type='text'
                error={errors.hqAddress}
                name='hqAddress'
                onFocus={this.clearField}
                onChange={this.handleChange}
                value={this.state.hqAddress}
                placeholder='Party Head Quarters'
              />

              <p className='file-input-text'>Upload a logo</p>
              <FormField 
                className='form-field'
                type='file'
                error={errors.logoUrl}
                name='logoUrl'
                onFocus={this.clearField}
                onChange={this.handleFileChange}
                placeholder='Logo Url'
              />

              <Button
                type="submit"
                className="btn btn-colored btn-signin btn-dark">
                { submit && <FontAwesomeIcon 
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
  parties: getParties,
  createParty,
};

const mapStateToProps = state => ({
  name: state.party.name,
  logoUrl: state.party.logoUrl,
  hqAddress: state.party.hqAddress,
  errors: state.party.errors,
  submit: state.party.submit,
  redirect: state.party.redirect
});

const CreateParty = connect(mapStateToProps, mapDispatchToProps)(CreatePartyUnit);

export { CreateParty, CreatePartyUnit };
