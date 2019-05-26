import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, PlainStrip } from '../../components/global';
import  { Showcase } from '../../components/user-profile';
import { getCandidacy } from '../../actions';

class Layout extends Component {
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
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const config = {
      headers: { token }
   };
    const { dispatch } = this.props;
    dispatch(getCandidacy(user.id, config));
  }

  updateNavItems = () => {
    const isCandidate = localStorage.getItem('isCandidate');
    if(isCandidate === 'true') {
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
      <Showcase />
      <Footer />
    </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  message: state.user.message
});

export default connect(mapStateToProps)(Layout);
