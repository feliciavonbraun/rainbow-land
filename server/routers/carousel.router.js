const express  = require('express');
const carouselRouter = express.Router();
const CarouselModel = require('../models/carousel.model');

carouselRouter.get('/', async (req, res) => {
    const docs = await CarouselModel.find({});
    res.status(200).json(docs);
});

// Add carousel if carouselname is unique
carouselRouter.post('/', async (req, res) => {
// Framtida admin fyller i info om ny karusell
    try {
        const carousel = new CarouselModel({
            name: req.body.name,
            tickets: req.body.tickets
        });
// Kollar om karusellnamnet är upptaget. Om inte- lägger till ny karusell, annars skickas felmeddelande 400.
        const findCarousel = await CarouselModel.findOne({ name: req.body.name});
        if (!findCarousel) {
            await carousel.save()
            res.status(200).json({status: carousel.name + ' ' + 'added.'});
        } else {
            res.status(400).json(`Carousel with the name: ${carousel.name} already exist.`);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update carousel if carousel exist, otherwise send error message
carouselRouter.put('/:id', async (req, res) => {
// Hittar karusell via id 
    try {
        const { id } = req.params;
        const carousel = await CarouselModel.findByIdAndUpdate(id, req.body);
// Om id inte finns så skickas 404 annars uppdateras karusellen.
        if (!carousel) {
            res.status(404).json('Carousel not found.');
        } else {
            await carousel.save()
            res.json({
                old: carousel,
                new: req.body
            });
        }  
    } catch (err) {
        res.status(500).json('Carousel not found.');
    }
});

carouselRouter.delete('/:id', async (req, res) => {
    const carousel = await CarouselModel.findOneAndDelete({_id: req.params.id});
    if (carousel) {
        res.status(200).json(`Carusel with the id: ${carousel.id} has been deleted.`);
    } else {
        res.status(404).json(`Carousel with this id does not exist.`);
    }
});

module.exports = carouselRouter;