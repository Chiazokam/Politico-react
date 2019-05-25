import React from 'react';
import { Header, Footer, PlainStrip } from '../../components/global';
import { GetOffices } from '../../components/office';

const Layout = (props) => {
  const navItems = ['logout'];
  return (
    <React.Fragment>
      <Header navItems={navItems}/>
      <div id="vote-office">
        <PlainStrip />
        <GetOffices auth={props}/>
      </div>
      <Footer />
    </React.Fragment>
    )
}

export default Layout;
