const express  = require('express');
const carouselRouter = express.Router()

const carousel = [
    {
        name: 'hej'
    }
];

carouselRouter.get('/', (req, res) => {
    res.send(carousel);
});

module.exports = carouselRouter;