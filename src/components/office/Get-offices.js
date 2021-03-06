import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OfficeCard } from '../global';
import { getOffices } from '../../actions';

class GetOfficesUnit extends Component {
  componentDidMount() {
    this.getOffices();
  }

  getOffices = () => {
    const { offices } = this.props;
    offices();
  }

  render() {
    const { getOffices } = this.props;
    return (
      <React.Fragment>
        {getOffices.length === 0 ? 
        <div>
          <div className="card-party title-header">
            <div className="party-main-admin party-main-parties admin-view-main">No Offices Found</div>
          </div>
        </div> :
        <div>
          <div className="card-party title-header">
            <div className="office-main">Office</div> 
            <div className="office-vote office-vote-flex">
            <div className="candidate-party">Office Type</div>
            </div> 
        </div> 
        <div className="card-party title-mobile">
            <div className="party-main admin-view-main">Offices</div>
        </div>
        </div> }

        { getOffices.map(office => 
          <OfficeCard
            key={Math.random(Date.now())}
            name={office.name}
            type={office.type}
        />
        )}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  offices: getOffices,
};

const mapStateToProps = state => ({
  getOffices: state.office.getOffices,
});

const GetOffices = connect(mapStateToProps, mapDispatchToProps)(GetOfficesUnit);

export { GetOffices, GetOfficesUnit }
