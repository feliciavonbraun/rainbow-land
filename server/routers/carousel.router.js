const express  = require('express');
const carouselRouter = express.Router();
const CarouselModel = require('../models/carousel.model');

carouselRouter.get('/', async (req, res) => {
    const docs = await CarouselModel.find({});
    res.status(200).json(docs);
});

carouselRouter.post('/', async (req, res) => {
    try {
        const carousel = new CarouselModel({
            name: req.body.name,
            tickets: req.body.tickets
        });
        const findCarousel = await CarouselModel.findOne({ name: req.body.name});
        if (!findCarousel) {
            await carousel.save()
            res.status(200).json({status: carousel.name + ' ' + 'added'});
        } else {
            res.status(400).json(`Carousel with the name:${carousel.name} already exist`);
        }
    } catch (err) {
        res.status(500).json(err);
    }
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