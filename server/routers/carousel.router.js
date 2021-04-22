const express  = require('express');
const carouselRouter = express.Router();
const CarouselModel = require('../models/carousel.model');

const carousels = [
    {
        "name": "Carousel",
        "tickets": "$$",
    },
    {
        "name": "Flying carousel",
        "tickets": "$",
    },
    {
        "name": "Roller coaster",
        "tickets": "$$$",
    },
    {
        "name": "Ferris Wheel",
        "tickets": "$",
    },
];

carouselRouter.get('/', async (req, res) => {
    const docs = await CarouselModel.find({});
    res.status(200).json(docs);
});

carouselRouter.post('/', async (req, res) => {
    const doc = await CarouselModel.create(req.body);
    res.status(201).json(doc);

    const newCarousel = req.body;
    carousels.push({
        ...newCarousel,
    });
    res.status(201).json(newCarousel);
});

carouselRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundCarousel = carousels.find((carousel) => {
        return carousel.id == id;
    });
    if (!foundCarousel) {
        res.status(404).json(`Carousel with id:${id} does not exist`);
    }
    res.status(200).json(foundCarousel);
});

carouselRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = carousels.findIndex((carousel) => carousel.id == id);
    if (index === -1) {
        return res.status(404).json(`Carousel with id:${id} does not exist`);
    }
    const updateCarousel = {
        ...req.body,
        id: parseInt(id)
    }
    carousels.splice(index, 1, updateCarousel);
    res.status(201).json(`Carousel with id:${id} has been updated!`);
});

carouselRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = carousels.findIndex(carousel => carousel.id == id);
    if (index === -1) {
        return res.status(404).json(`This carousel does not exists`);
    }
    const deletedCarousel = carousels.splice(index, 1);
    res.status(200).json(deletedCarousel);
});

module.exports = carouselRouter;