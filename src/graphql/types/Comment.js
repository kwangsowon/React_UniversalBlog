/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLObjectType as ObjectType,
	GraphQLNonNull as NonNull,
	GraphQLString as String,
	GraphQLID as ID
} from 'graphql';

export default new ObjectType({
	name: 'Comment',
	fields: {
		_id: {
			type: new NonNull(ID)
		},
		postId: {
			type: new NonNull(ID)
		},
		parentId: {
			type: ID
		},
		text: {
			type: String
		}
	}
});