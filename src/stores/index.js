import { createStore } from 'redux';
import reducers from '../reducers';

function reduxStore(initialState){
	const store = createStore(reducers, initialState,
    	window.devToolsExtension && window.devToolsExtension());
	return store;
}

export default reduxStore