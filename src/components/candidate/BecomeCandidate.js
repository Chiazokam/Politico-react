import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, ToastMessage } from '../global';
import { getOffices, getParties, indicateInterest } from '../../actions';
import { getUser } from '../../utils';
import '../../styles/create-party/create-party.scss';

class BecomeCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: '',
      party: '',
      userId: ''
    };
  }

  componentDidMount() {
    this.getOffices();
    this.getParties();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = getUser()
    const userId = String(user.id);
    const candidate = {
      party: this.state.party,
      office: this.state.office,
      userId,
    };
    this.props.dispatch(indicateInterest(candidate));
  }

  getOffices = () => {
    this.props.dispatch(getOffices());
  }
  
  getParties = () => {
    this.props.dispatch(getParties());
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  render() {
    const { getOffices, getParties, submit, redirect, errors } = this.props;
    if (redirect) {
      toast(<ToastMessage message={'Successfully declared interest'} />, {
        type: 'success',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 0,
      });
    }
    
    return (
      <div className="interest">
        <Container>
          <p className="form-text">Declare Interest</p>
            <form onSubmit={this.handleSubmit}>
            <div className="error">{errors.message}</div>
              <div className="form-field">
              <div className="error">{errors.office}</div>
                  <select id="office-output" onChange={this.handleChange} name='office'>
                    {getOffices.length === 0 ? <option>No offices currently</option> : <option>Select Office</option> }
                    { getOffices.map(office =>
                      <option key={office.id} value={office.id}>{office.name}</option>
                    )}
                  </select> 
              </div>

              <div className="form-field">
              <div className="error">{errors.party}</div>
                  <select id="party-output" onChange={this.handleChange}  name='party'>
                    {getParties.length === 0 ? <option>No Parties currently</option> : <option>Select Party</option> }
                    { getParties.map(party =>
                      <option key={party.id} value={party.id}>{party.name}</option>
                    )}
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

const mapStateToProps = state => ({
  getOffices: state.office.getOffices,
  getParties: state.party.getParties,
  submit: state.candidate.submit,
  redirect: state.candidate.redirect,
  errors: state.candidate.errors
});

export default connect(mapStateToProps)(BecomeCandidate);
