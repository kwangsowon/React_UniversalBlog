/**
 * Created by Yvan on 2017/5/4.
 */
import {
    GraphQLString as String,
    GraphQLID as ID,
    GraphQLNonNull as NonNull,
} from 'graphql';
import CommentType from '../../types/Comment';
import CommentInputType from '../../types/CommentInput';
import CommentModel from '../../../models/comment';

export default {
    type: CommentType,
    args: {
        data: {
            name: 'data',
            type: new NonNull(CommentInputType)
        }
    },
    async resolve(root, params, options){
        const commentModel = new CommentModel(params.data);
        const newComment = await commentModel.save();

        if(!newComment){
            throw new Error('add comment failed!')
        }

        return newComment;
    }
}
