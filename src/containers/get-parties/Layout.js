import React from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { GetParties } from '../../components/party';

const Layout = () => {
  const navItems = ['back', 'logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <div id="view-party">
        <PlainStrip />
        <GetParties />
      </div>
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
