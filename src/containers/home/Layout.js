import React from 'react';
import { Showcase } from '../../components/home';
import { Header, Footer } from '../../components/global';

const Layout = () => {
  const navItems = ['home', 'about', 'login'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <Showcase />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
