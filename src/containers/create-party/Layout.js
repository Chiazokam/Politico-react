import React from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { CreateParty } from '../../components/party';

const Layout = () => {
  const navItems = ['logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <PlainStrip />
      <CreateParty />
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
