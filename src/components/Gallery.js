//体验馆

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header'
import Slide from './Slide'
import EntrySection from './EntrySection'
import ProductSection from './ProductSection'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div>体验馆</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
