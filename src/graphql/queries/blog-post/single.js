/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLID as ID,
	GraphQLNonNull as NonNull
} from 'graphql';
import {Types} from 'mongoose';
import BlogPostType from '../../types/BlogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
	type: BlogPostType,
	args: {
		id: {
			name: 'id',
			type: new NonNull(ID)
		}
	},
	resolve(root, params, options){
		const projection = getProjection(options.fieldsASTs[0]);

		return BlogPostModel
			.findById(params.id)
			.select(projection)
			.exec();
	}
}

