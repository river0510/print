//体验馆

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Header from './Header'
import Slide from './Slide'
import EntrySection from './EntrySection'
import ProductSection from './ProductSection'
import Gallery from './Gallery'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Gallery/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
