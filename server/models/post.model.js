const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    username: { type: 'String', required: true },
    rating: { type: 'Number', required: true },
    comment: { type: 'String', max: 150 },
    carouselTag: { type: 'string', required: true}
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
