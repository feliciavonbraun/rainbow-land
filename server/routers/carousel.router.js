const express  = require('express');
const carouselRouter = express.Router();
const CarouselModel = require('../models/carousel.model');

const carousels = [
    {
        "name": "Carousel",
        "tickets": "$$",
        "id": 1
    },
    {
        "name": "Flying carousel",
        "tickets": "$",
        "id": 2
    },
    {
        "name": "Roller coaster",
        "tickets": "$$$",
        "id": 3
    },
    {
        "name": "Ferris Wheel",
        "tickets": "$",
        "id": 4
    },
];

carouselRouter.get('/', async (req, res) => {
    const docs = await CarouselModel.find({});
    res.status(200).json(docs);
});

carouselRouter.post('/', async (req, res) => {
    const doc = await CarouselModel.create(req.body);
    res.status(201).json(doc);

    let newId = 0;
    const newCarousel = req.body;

    carousels.forEach(carousel => {
        if (carousel.id > newId) {
            newId = carousel.id;
        }
    });
    newId++;
    carousels.push({
        ...newCarousel,
        id: newId
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