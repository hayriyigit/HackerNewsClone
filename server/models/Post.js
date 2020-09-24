const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user_id: Schema.ObjectId,
    title:{
        type: String,
        required: true
    },
    content:{
        type: String
    },
    isUrl:{
        type: Boolean,
        required: true
    },
    url:{
        type: String
    },
    isQuestion: {
        type: Boolean,
        required: true
    },
    rate: {
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('posts', postSchema);