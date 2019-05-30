import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, FormField, Button } from '../global';
import '../../styles/create-party/create-party.scss';
import { createOffice, getOffices } from '../../actions';
 
class CreateOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const office = {
      name: this.state.name,
      type: this.state.type
    }
   const { offices, createOffice } = this.props;
   createOffice(office);
   offices();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  clearField = (e) => {
    this.setState({ errors: '' })
  }

  render() {
    const { errors, redirect, submit } = this.props;
    if (redirect) return <Redirect to='/offices'/>;
    return (
      <div id='create-office'>
        <Container>
          <p className='form-text'>Create Party</p>
          <p className='form-info'>All fields are compulsory</p>
            <form onSubmit={this.handleSubmit}>
              <div className='error'>{errors.message}</div>
              <FormField 
                className='form-field'
                type='text'
                error={errors.name}
                name='name'
                onFocus={this.clearField}
                onChange={this.handleChange}
                value={this.state.name}
                placeholder='Party Name'
              />

              <div className='form-field'>
                <div id='error-type'></div>
                <select name='type' onChange={this.handleChange}>
                  <option>Select Office Type</option>
                  <option value='federal'>Federal</option>
                  <option value='legislative'>Legislative</option>
                  <option value='state'>State</option>
                  <option value='local government'>Local Government</option>
                </select>
              </div>

              <Button
                type='submit'
                className='btn btn-colored btn-signin btn-dark'>
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
  offices: getOffices,
  createOffice,
};

const mapStateToProps = state => ({
  office: state.office.office,
  errors: state.office.errors,
  redirect: state.office.redirect,
  submit: state.office.submit
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateOffice);
