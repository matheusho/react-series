import '../commons/templates/dependencies';
import React from 'react'; 

import Header from '../commons/templates/header';
import Footer from '../commons/templates/footer';
import SideBar from '../commons/templates/sidebar';
import Routes from './routes';

export default props => (
  <div className="wrapper">
    <Header />
    <SideBar />
    <main className="content-wrapper">
      <Routes />
    </main>
    <Footer></Footer>
  </div>
);