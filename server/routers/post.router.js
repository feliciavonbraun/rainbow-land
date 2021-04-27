const express = require('express');
const { rawListeners } = require('../models/post.model');
const postRouter = express.Router();
const postModel = require('../models/post.model');

postRouter.get('/', async (req, res) => {
    const docs = await postModel.find({});
    res.status(200).json(docs);
});

// Add post if post is unique
postRouter.post('/', (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    const post = new postModel({
        username: req.session.username,
        rating: req.body.rating,
        description: req.body.description
    });

    post.save();
    // res.status(200).json({new: req.body}); // en av dessa
    post.then(() => res.status(200).json('Post has been posted!'));
    post.catch((err) => res.status(400).json("Error"));
});

// Update post if post exist, otherwise send error message
postRouter.put('/:id', async (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    // Hittar post via id 
    try {
        const { id } = req.params;
        const post = await postModel.findByIdAndUpdate(id, req.body);
        // Om id inte finns så skickas 404 annars uppdateras posten.
        if (!post) {
            res.status(404).json('post not found.');
        } else {
            await post.save()
            res.json({
                old: post,
                new: req.body
            });
        }
    } catch (err) {
        res.status(500).json('post not found.');
    }
});

// Check if post exist and delete if existing is true
postRouter.delete('/:id', async (req, res) => {

    //checks if you are logged in or not
    if (!req.session.username) {
        return res.status(400).json('You are not logged in');
    };

    const post = await postModel.findOneAndDelete({ _id: req.params.id });
    if (post) {
        res.status(200).json(`Post with the id: ${post.id} has been deleted.`);
    } else {
        res.status(404).json(`Post with this id does not exist.`);
    }
});

module.exports = postRouter;