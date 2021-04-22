const express = require('express');
const userRouter = express.Router();
const UserModel = require('../models/user.model');

const testUsers = [
    {
        username : "Lars",
        password : "abc123"
    },
    {
        username : "Anna",
        password : "123abc"
    }
];

// Get all users
userRouter.get('/', async (req, res) => {
    const docs = await UserModel.find({});
    res.status(200).json(docs);
});

// Add new user
userRouter.post('/', async (req, res) => {
    const doc = await UserModel.create(req.body);
    res.status(201).json(doc);

    
    testUsers.push({
        ...req.body
    });

    res.status(201).json(req.body);
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