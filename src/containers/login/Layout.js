import React from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { Showcase } from '../../components/login';

const Layout = () => {
  const navItems = ['home', 'about', 'signup'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <PlainStrip />
      <Showcase />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
