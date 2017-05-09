/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLList as List
} from 'graphql';
import CommentType from '../../types/Comment';
import CommentModel from '../../../models/comment';
import getProjection from '../../getProjection';

export default {
	type: new List(CommentType),
	args: {},
	resolve(root, params, options){
		/*const projection = getProjection(options.fieldASTs[0]);*/

		return CommentModel
			.find()
			//.select(projection)
			.exec();
	}
}