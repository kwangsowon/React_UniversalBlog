/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLID as ID,
	GraphQLNonNull as NonNull
} from 'graphql';
import CommentType from '../../types/Comment';
import CommentModel from '../../../models/comment';
import getProjection from '../../getProjection';

export default {
	type: CommentType,
	args:{
		id:{
			name:'id',
			type: new NonNull(ID)
		}
	},
	resolve(root, params, options){
		const projection = getProjection(options.fieldASTs[0]);

		return CommentModel
			.findById(params.id)
			.select(projection)
			.exec();
	}
}
