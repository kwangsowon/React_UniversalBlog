/**
 * Created by wyf on 2017/4/26.
 */
import {
	GraphQLObjectType as ObjectType,
	GraphQLString as String,
	GraphQLID as ID
} from 'graphql';

export default new ObjectType({
	name: 'BlogPostInput',
	fields: {
		_id: {
			type: ID
		},
		title: {
			type: String
		},
		description: {
			type: String
		}
	}
})