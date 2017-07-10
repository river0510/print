//首页

require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Slide from './Slide'
import EntrySection from './EntrySection'
import ProductSection from './ProductSection'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Slide/>
        <EntrySection/>
        <ProductSection/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
