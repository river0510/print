require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

class HomeLayout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default HomeLayout;
