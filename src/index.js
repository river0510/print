import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	hashHistory
} from 'react-router'
import Layout from './layout/Layout.js'
import Home from './components/HomePage.js'
import Gallery from './components/GalleryPage.js'

// Render the main component into the dom
ReactDOM.render(
	<Router history={hashHistory}>
		<Route component={Layout}>
			<Route path='/' component={Home}/>
			<Route path='/gallery' component={Gallery}/>
		</Route>
	</Router>, 
document.getElementById('app'));
