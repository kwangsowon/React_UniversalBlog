/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLObjectType as ObjectType,
	GraphQLNonNull as NonNull,
	GraphQLID as ID
} from 'graphql';
import BlogPostComment from './BlogPostCommon';

export default new ObjectType({
	name: 'BlogPost',
	fields: {
		_id: {
			type: new NonNull(ID)
		},
        ...BlogPostComment
	}
})
