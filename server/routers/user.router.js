const express = require('express');
const userRouter = express.Router();

const testUsers = [
    {
        username : "Lars",
        password : "abc123",
        id : 1
    },
    {
        username : "Anna",
        password : "123abc",
        id : 2
    }
];

// Get all users
userRouter.get('/', (req, res) => {
    res.status(200).json(testUsers);
});

// Add new user
userRouter.post('/', (req, res) => {
    let newId = 0;
    testUsers.forEach((testUser) => {
        if(testUser.id > newId) {
            newId = testUser.id;
        };
    });
    
    newId++

    testUsers.push({
        id: newId,
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