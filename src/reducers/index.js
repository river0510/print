import { combineReducers } from 'redux'
import language from './language.js'
import gallery from './gallery.js'

const reducers = {
	language,
	gallery
}

const combined = combineReducers(reducers);

export default combined;