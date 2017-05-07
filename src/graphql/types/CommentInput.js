/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLID as ID,
    GraphQLInputObjectType as InputObjectType,
	GraphQLNonNull as NonNull,
	GraphQLString as String
} from 'graphql';

export default new InputObjectType({
	name: 'CommentInput',
	fields: {
		_id: {
			type: ID
		},
		postId: {
			type: new NonNull(ID)
		},
		parentId: {
			type: ID
		},
		text: {
			type: new NonNull(String)
		}
	}
});
