import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PartyCard } from '../global';
import { getParties } from '../../actions';
import { getAdminStatus } from '../../utils';

class GetPartiesUnit extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.getParties();
  }

  getParties = () => {
    const { parties } = this.props;
    parties();
  }

  render() {
    const { getParties } = this.props;
    const isAdmin = getAdminStatus();
    let editButton, deleteButton;
    if(isAdmin === 'true') {
      editButton =  <a className="edit">Edit Name</a>
      deleteButton = <a className="delete">Delete</a>
    } 
    else if (isAdmin === 'false') {
      editButton =  ''
      deleteButton = ''
    }
    
    return (
      <React.Fragment>
        {getParties.length === 0 ? 
        <div>
          <div className="card-party title-header">
            <div className="party-main-admin party-main-parties admin-view-main">No Parties Found</div>
          </div>
        </div> :
        <div>
          <div className="card-party title-header">
            <div className="party-main">Parties</div>
            <div className="party-logo">Logo</div>
          </div>
          <div className="card-party title-mobile">
            <div className="party-main">Parties</div>
          </div>
        </div> }

        { getParties.map(party => 
          <PartyCard
            key={Math.random(Date.now())}
            name={party.name}
            headquarters={party.hqaddress}
            logourl={party.logourl}
            edit={editButton}
            delete={deleteButton}
        />
        )}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  parties: getParties
};

const mapStateToProps = state => ({
  getParties: state.party.getParties,
});

const GetParties = connect(mapStateToProps, mapDispatchToProps)(GetPartiesUnit);

export { GetParties, GetPartiesUnit }
