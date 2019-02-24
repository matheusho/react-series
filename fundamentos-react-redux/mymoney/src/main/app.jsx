import '../common/templates/dependencies';
import React from 'react'; 

import Header from '../common/templates/header';
import Footer from '../common/templates/footer';
import SideBar from '../common/templates/sidebar';
import Messages from '../common/msg/msg.jsx';
import Routes from './routes';

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <main className="content-wrapper">
      <Routes />
    </main>
    <Footer></Footer>
    <Messages />
  </div>
);
