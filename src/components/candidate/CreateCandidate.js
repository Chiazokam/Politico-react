import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container, Button, ToastMessage } from '../global';
import { getCandidatesRequest, createCandidate, clearErrors } from '../../actions';
import '../../styles/create-party/create-party.scss';

class CreateCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      office: '',
      party: '',
      user: '',
      error: '',
      success: ''
    };
  }

  componentDidMount() {
    this.getCandidates();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const candidate = {
      party: this.state.party,
      office: this.state.office
    }
    const userid = this.state.user;

    if (candidate.party === '' || candidate.office === '' || userid === '') {
      this.setState({ error: 'Field cannot be empty' })
    } else {
      this.props.dispatch(createCandidate(candidate, userid));
    }
  }

  getCandidates = () => {
    this.props.dispatch(getCandidatesRequest());
  }

  handleChange = (e) => {
    const { candidates, dispatch } = this.props;
    this.setState({ 
      [e.target.name]: e.target.value,
      error: ''  
    });
    dispatch(clearErrors());
    const userid = parseInt(e.target.value)
    var data = candidates.filter(candidate => {
      return candidate.userid === userid
    })
    const party = String(data[0].party);
    const office = String(data[0].office);
    this.setState({ 
      party,
      office,
    });
  }

  render() {
    const { candidates, errors, submitCandidate, redirect } = this.props;
    if (redirect) {
      toast(<ToastMessage message={'Successfully created a candidate'} />, {
        type: 'success',
        closeButton: false,
        hideProgressBar: true,
        autoClose: 0,
      });
    }

    return (
      <div className="interest">
        <Container>
          <p className="form-text">Create Candidate</p>
            <form onSubmit={this.handleSubmit}>
            <div className="error">{errors.message || this.state.error} </div>
              <div className="form-field">
                  <select onChange={this.handleChange} name='user'>
                    {candidates.length === 0 ? <option>No interested candidates currently</option> : <option>Select Candidate</option> }
                    { candidates.map(candidate =>
                      <option
                        key={candidate.id}
                        value={candidate.userid}
                      >
                        {candidate.firstname} {candidate.lastname}
                      </option>
                    )}
                  </select> 
              </div>

              <Button
                type='submit'
                className='btn btn-colored btn-signin btn-dark'>
                { submitCandidate && <FontAwesomeIcon 
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
  candidates: state.candidate.candidates,
  errors: state.candidate.candidateErrors,
  submitCandidate: state.candidate.submitCandidate,
  redirect: state.candidate.candidateRedirect
});

export default connect(mapStateToProps)(CreateCandidate);
