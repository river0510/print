import { combineReducers } from 'redux'
import language from './language.js'

const reducers = {
	language
}

const combined = combineReducers(reducers);

export default combined;