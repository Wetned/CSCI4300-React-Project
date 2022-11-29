const mongoose = require('mongoose');

const postSchema = new Schema({
    title: { type: String, required: false }, 
    content: { type: String, required: false },
    image: { type: String, required: false }, // use a url here for faster access
    details: { type: String, required: false }, 
    creator: { type: String, required: true } //  will be autogenerated when we add the user model
});


module.exports = mongoose.model('Post', postSchema); // create the Place model