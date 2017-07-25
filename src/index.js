import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import {
	Router,
	Route,
	hashHistory
} from 'react-router'
import Layout from './layout/Layout.js'
import Home from './components/HomePage.js'
import Gallery from './components/GalleryPage.js'


const store = configureStore();

// Render the main component into the dom
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route component={Layout}>
				<Route path='/' component={Home}/>
				<Route path='/gallery' component={Gallery}/>
        	</Route>   	
		</Router>
	</Provider>, 
document.getElementById('app'));
