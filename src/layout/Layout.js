require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CSSTransitionGroup } from 'react-transition-group'
import './layout.css'

class HomeLayout extends React.Component {
  render() {
  	console.log(this.props)
    return (
      <div>
        <Header/>
        <CSSTransitionGroup
              transitionName="router"
              transitionEnterTimeout={1200}
              transitionLeaveTimeout={200}
          >
			<div key={this.props.location.pathname}>
			{this.props.children}
			</div>
        </CSSTransitionGroup>
        <Footer/>
      </div>
    );
  }
}

export default HomeLayout;
