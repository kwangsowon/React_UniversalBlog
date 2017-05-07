/**
 * Created by wyf on 2017/4/26.
 */
import {
    GraphQLInputObjectType as InputObjectType,
	GraphQLID as ID
} from 'graphql';
import BlogPostComment from './BlogPostCommon';

export default new InputObjectType({
	name: 'BlogPostInput',
	fields: {
		_id: {
			type: ID
		},
        ...BlogPostComment
	}
})
