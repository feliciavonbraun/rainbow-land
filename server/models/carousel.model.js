const mongoose = require('mongoose');
const carouselSchema = new mongoose.Schema({
    name: { type: 'String', required: true, unique: true },
    tickets: { type: 'Number', required: true }
});



const carouselModel = mongoose.model('carousel', carouselSchema);

module.exports = carouselModel;
