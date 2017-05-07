/**
 * Created by wyf on 2017/4/26.
 */
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	}
});

export default mongoose.model('BlogPost', blogPostSchema);
