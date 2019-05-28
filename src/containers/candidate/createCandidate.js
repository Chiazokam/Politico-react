import React from 'react';
import { Header, Footer } from '../../components/global';
import { CreateCandidate } from '../../components/candidate';

const Layout = () => {
  const navItems = ['logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <CreateCandidate />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
