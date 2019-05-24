import React from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { CreateOffice } from '../../components/office';

const Layout = () => {
  const navItems = ['back', 'logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <PlainStrip />
      <CreateOffice />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
