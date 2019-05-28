import React, { Component } from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { Showcase } from '../../components/admin-profile';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: ['create a candidate', 'logout']
    };
  }

  render() {
  return (
    <React.Fragment>
      <Header navItems={this.state.navItems}/>
      <PlainStrip />
      <h2 className='user-profile-text'>Perform Admin Activities</h2>
      <Showcase />
      <Footer />
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  message: state.user.message
});

export default Layout;
