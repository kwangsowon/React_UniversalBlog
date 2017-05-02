/**
 * Created by Yvan on 2017/5/2.
 */
import {
    GraphQLNonNull as NonNull,
    GraphQLID as ID,
} from 'graphql';

import BlogPostType from '../../types/BlogPost';
import BlogPostInputType from '../../types/BlogPostInput';
import BlogPostModel from '../../../models/blogPost';
import getProjection from '../../getProjection';

export default {
    type: BlogPostType,
    args: {
        id: {
            name: 'id',
            type: new NonNull(ID)
        },
        data: {
            name: 'data',
            type: new NonNull(BlogPostInputType)
        }
    },
    async resolve(root, params, options){
        const projection = getProjection(options.fieldASTs[0]);

        const blogPost = await BlogPostModel.findOneAndUpdate({_id: params.id}, params.data, {new: true});
        if(!blogPost){
            throw new Error (`blog ${params.id} modify failed`);
        }

        return blogPost;
    }
}
