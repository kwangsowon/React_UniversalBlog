/**
 * Created by wyf on 2017/4/26.
 */
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true
	}
});

export default mongoose.model('Comment', commentSchema);