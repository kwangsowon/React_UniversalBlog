/**
 * Created by Yvan on 2017/5/7.
 */
import {
    GraphQLString as String,
    GraphQLInt as Int
} from 'graphql';

export default {
    title: {
        type: String
    },
    plaintext: {
        type: String
    },
    content: {
        type: String
    },
    count: {
        type: Int
    },
    publishDate: {
        type: String
    },
    type: {
        type: String
    },
    blogStatus:  {
        type: String
    }
};
