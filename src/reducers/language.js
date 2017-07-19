import {deepCopy} from '../Utils'

const initialState = {
	languageId : 0
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case "CHANGE_LANGUAGE": {
			let newState = deepCopy(state);
			console.log(newState)
			if(action.id != null){
				newState.languageId = action.id;
			}
			console.log(newState)
			return newState;
		}
		default: {
    		return state;
    	}
	}
}