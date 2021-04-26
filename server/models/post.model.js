const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    username: { type: 'String', required: true },
    rating: { type: 'Number', required: true },
    description: { type: 'String', max: 150 }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
