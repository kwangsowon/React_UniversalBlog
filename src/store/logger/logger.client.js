/**
 * Created by wyf on 2017/4/20.
 */
import { createLogger as reduxLogger } from 'redux-logger';

export default function createLogger() {
	return reduxLogger({
		collapsed: true,
	});
}