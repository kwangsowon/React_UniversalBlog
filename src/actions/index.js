/**
 * Created by wyf on 2017/4/20.
 */
import { SET_RUNTIME_VARIABLE } from '../constants';

export function setRuntimeVariable({ name, value }) {
	return {
		type: SET_RUNTIME_VARIABLE,
		payload: {
			name,
			value,
		},
	};
}