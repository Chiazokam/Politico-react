import React from 'react';
import { Header, Footer, TextStrip } from '../../components/global';
import { Showcase } from '../../components/about';

const Layout = () => {
  const navItems = ['home', 'signup', 'login'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <TextStrip>About Politico</TextStrip>
      <Showcase />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
