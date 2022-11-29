const mongoose = require('mongoose');

const postSchema = new Schema({
    title: { type: String, required: false }, 
    description: { type: String, required: false },
    image: { type: String, required: false }, // use a url here for faster access
    creator: { type: String, required: true } //username...?
});


module.exports = mongoose.model('Post', postSchema); 