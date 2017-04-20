/**
 * Created by wyf on 2017/4/20.
 */
import { SET_RUNTIME_VARIABLE } from '../constants';

export default function runtime(state = {}, action) {
	switch (action.type) {
		case SET_RUNTIME_VARIABLE:
			return {
				...state,
				[action.payload.name]: action.payload.value,
			};
		default:
			return state;
	}
}