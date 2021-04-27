const express = require('express');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');


// Get all users
userRouter.get('/', async (req, res) => {
    const docs = await UserModel.find({});
    res.status(200).json(docs);
});

// Check if user is logged in
userRouter.get('/authenticate', async (req, res) => {
    try {
        if (req.session.username) {
            res.status(200).json('You are logged in');
        } else {
            res.status(400).json('You are not logged in');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


// Login user
userRouter.post('/login', async (req, res) => {
    const { username } = req.body;
    const user = await UserModel.findOne({ username: req.body.username });

    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        res.status(401).json('Wrong username or password sucker');
        return
    }

    //Create session 
    req.session.username = username;
    req.session.role = "user";

    res.status(200).json(`${user.username} is logged in`);
});


// Add user if username is unique
userRouter.post('/add', async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        const user = new UserModel({
            username: req.body.username,
            password: password
        });
        const findUser = await UserModel.findOne({ username: req.body.username });
        if (!findUser) {
            await user.save()
            res.status(200).json(`${user.username} registered`);
        } else {
            res.status(400).json(`${user.username} already exists`);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



// Update user if user exist, otherwise send error message (not working atm!)
userRouter.put('/update/:id', async (req, res) => {

});



// Check if user exist and delete if existing is true
userRouter.delete('/deleteUser/:id', async (req, res) => {
    const user = await UserModel.findOneAndDelete({ _id: req.params.id });
    if (user) {
        res.status(200).json(`User with the id: ${user.id} has been deleted.`);
    } else {
        res.status(404).json(`User with this id does not exist.`);
    }
});



// Logout user
userRouter.delete('/logout', (req, res) => {
    if (!req.session.username) {
        return res.status(400).json('You are already logged out');
    }
    req.session = null;
    res.status(200).json('Logout success!');
});

module.exports = userRouter;