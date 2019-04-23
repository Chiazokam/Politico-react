import React from 'react';
import { Header, Footer, PlainStrip, PageContainer } from '../../components/global';
import { Showcase } from '../../components/signup';

const Layout = () => {
  const navItems = ['home', 'about', 'login'];
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
