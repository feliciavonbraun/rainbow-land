const express = require('express');
const postRouter = express.Router();
const PostModel = require('../models/post.model');

postRouter.get('/', async (req, res) => {
    const docs = await PostModel.find({});
    res.status(200).json(docs);
});

// Add post if post is unique
postRouter.post('/', (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    const post = new PostModel({
        username: req.session.username,
        rating: req.body.rating,
        image: req.body.image,
        comment: req.body.comment,
        carouselTag: req.body.carouselTag
    });

    post.save();
    res.status(200).json({new: req.body});
});

// Update post if post exist, otherwise send error message
postRouter.put('/:id', async (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    try {
        const post = await PostModel.findOne({ _id: req.params.id });

        if (post.username === req.session.username) {

            await PostModel.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        rating: req.body.rating,
                        image: req.body.image,
                        comment: req.body.comment,
                    },
                },
            );
            res.status(200).json('Your post was updated');

        } else {
            return res.status(404).json('This is not your post, you can not edit');
        };

    } catch (err) {
        res.status(500).json('post not found.');
    };
});

// Check if post exist and delete if existing is true
postRouter.delete('/:id', async (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    const post = await PostModel.findOne({ _id: req.params.id });
    if (post.username === req.session.username) {

        await PostModel.findByIdAndDelete(
            { _id: req.params.id }
        )
        res.status(200).json(`Post with the id: ${post.id} has been deleted.`);
    } else {
        res.status(404).json(`You can not delete someone eles post, duh.`);
    }
});

module.exports = postRouter;