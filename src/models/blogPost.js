/**
 * Created by wyf on 2017/4/26.
 */
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
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
        type: Number
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
});

export default mongoose.model('BlogPost', blogPostSchema);
