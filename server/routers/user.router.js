const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/user.model');



// Get all users
userRouter.get('/', async (req, res) => {
    const docs = await UserModel.find({});
    res.status(200).json(docs);
});

// Add user if username is unique
userRouter.post('/', async (req, res) => {
    try {
        const user = new UserModel({
            username: req.body.username,
            password: req.body.password
        });
        const findUser = await UserModel.findOne({ username: req.body.username});
        if (!findUser) {
            await user.save()
            res.status(200).json({status: user.username + ' ' + 'Registered'});
        } else {
            res.status(400).json('user already exist');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update user
userRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = testUsers.findIndex(testUser => testUser.id == id);

    if(index === -1) {
        res.status(404).json({'error': 'Oups... This user does not exist.'});
    };

    const updatedUser = {
        id: parseInt(id),
        ...req.body,
    };

    testUsers.splice(index, 1, updatedUser);

    res.status(200).json(req.body);
});

// Delete user
userRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = testUsers.findIndex(testUser => testUser.id == id);

    if(index === -1) {
        res.status(404).json({'error': 'Oups... This user does not exist.'});
        return
    };

    const deletedUser = testUsers.splice(index, 1);

    res.status(200).json(deletedUser);
});

module.exports = userRouter;