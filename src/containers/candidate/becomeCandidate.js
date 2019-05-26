import React from 'react';
import { Header, Footer } from '../../components/global';
import { BecomeCandidate } from '../../components/candidate';

const Layout = () => {
  const navItems = ['logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <BecomeCandidate />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
