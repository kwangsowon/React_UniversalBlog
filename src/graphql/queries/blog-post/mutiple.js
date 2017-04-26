/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLList as List
} from 'graphql';
import BlogPostType from '../../types/BlogPost';
import getProjection from '../../getProjection';
import BlogPostModel from '../../../models/blogPost';

export default {
	type: new List(BlogPostType),
	args: {},
	resolve(root, params, options){
		const projection = getProjection(options.fieldASTs[0]);

		return BlogPostModel
			.find()
			.select(projection)
			.exec();
	}
}