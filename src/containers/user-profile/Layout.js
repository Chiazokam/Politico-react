import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, PlainStrip } from '../../components/global';
import  { Showcase } from '../../components/user-profile';
import { getCandidacy } from '../../actions';
import { getUser, isCandidate } from '../../utils';

class UserLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['vote', 'run for an office', 'logout']
    };
  }

  componentDidMount() {
    {this.updateNavItems()}
    {this.getCandidacy()}
  }

  getCandidacy = () => {
    const user = getUser();
    const { getCandidacy } = this.props;
    getCandidacy(user.id);
  }

  updateNavItems = () => {
    const isUserCandidate = isCandidate();
    if(isUserCandidate === true) {
      this.setState({
        navItems: ['vote', 'run for an office', 'create petition', 'logout']
      });
    }
  }

  render() {
  return (
    <React.Fragment>
      <Header navItems={this.state.navItems}/>
      <PlainStrip />
      <h2 className='user-profile-text'>View Election Records</h2>
      <Showcase />
      <Footer />
    </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  getCandidacy
};

const mapStateToProps = state => ({
  message: state.user.message
});

const UserProfile = connect(mapStateToProps, mapDispatchToProps)(UserLayout);

export {
  UserProfile,
  UserLayout
}
