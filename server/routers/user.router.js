const express = require('express');
const userRouter = express.Router();

const testUser = [
    {
        username : "Lars",
        password : "abc123",
        id : "1",
    }
];

// Get all users
userRouter.get('/', (req, res) => {
    res.send('a list of users');
});

module.exports = userRouter;