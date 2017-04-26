/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLNonNull as NonNull,
	GraphQLBoolean as Boolean
} from 'graphql';
import BlogPostType from '../../types/BlogPost';
import BlogPostInputType from '../../types/BlogPostInput';
import BlogPostModel from '../../../models/blogPost';

export default {
	type: BlogPostType,
	args: {
		data: {
			name: 'data',
			type: new NonNull(BlogPostInputType)
		}
	},
	async resolve(root, params, options){
		const blogPostModel = new BlogPostModel(params.data);
		const newBlogPost = await blogPostModel.save();

		if(!newBlogPost){
			throw new Error('Error adding new blog post');
		}

		return newBlogPost;
	}
}