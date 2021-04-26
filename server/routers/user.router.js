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
        if (req.body.username) {
            res.status(200).jsom('You are logged in');
        } else {
            res.status(400).json('You are not logged in');
        }
    } catch(err) {
        res.status(500).json(err);
    }
});


// Login user
userRouter.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ username: req.body.username });
        
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json('Wrong username or password sucker');
        } else {
            res.status(200).json('You are now logged in, congratz');
        }
    } catch (err) {
        res.status(500).send(err);
    }
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



// Update user if user exist, otherwise send error message
userRouter.put('/:id', async (req, res) => {
    // Hittar rätt användare via id
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndUpdate(id, req.body);
    // Om användaren inte finns, skriv ut 404 annars spara uppdatering
        if (!user) {
            res.status(404).json('User not found');
        } else {
            await user.save()
            res.json({
                old: user,
                new: req.body
            });
        }  
    } catch (err) {
        res.status(500).json('User not found');
    }
});

// Check if user exist and delete if existing is true
userRouter.delete('/:id', async (req, res) => {
    const user = await UserModel.findOneAndDelete({_id: req.params.id});
    if (user) {
        res.status(200).json(`User with the id: ${user.id} has been deleted.`);
    } else {
        res.status(404).json(`User with this id does not exist.`);
    }
});

// Logout user
userRouter.route('/logout').delete((req, res) => {
    try {
        req.session = null;
        res.status(200).json('You are now logged out!');
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = userRouter;