import React from 'react';
import { Showcase } from '../../components/home';
import { Header, Footer } from '../../components/global';

const Layout = () => {
  const navItems = ['Home', 'About', 'Sign in'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <Showcase />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
