import {deepCopy} from '../Utils'

const initialState = {
	languageId : 0
}

export default function reducer(state = initialState, action){
	switch(action.type){
		case "CHANGE_LANGUAGE": {
			let newState = deepCopy(state);
			if(action.id){
				newState.languageId = action.id;
			}

			return newState;
		}
		default: {
    		return state;
    	}
	}
}