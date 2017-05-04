/**
 * Created by Yvan on 2017/5/4.
 */
import {
    GraphQLNonNull as NonNull,
    GraphQLID as ID
} from 'graphql';
import CommentType from '../../types/Comment';
import CommentInputType from '../../types/CommentInput';
import CommentModel from '../../../models/comment';

export default {
    type: CommentType,
    args: {
        id: {
            name: 'id',
            type: new NonNull(ID)
        },
        data: {
            name: 'data',
            type: new NonNull(CommentInputType)
        }
    },
    async resolve(root, params, options){
        const comment = await CommentModel.findOneAndUpdate({_id: params.id}, params.data, {new: true})
        if(!comment){
            throw new Error('Error modify comment');
        }

        return comment;
    }
}
