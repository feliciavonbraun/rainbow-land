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
// ny användare fyller i användarnamn och lösenord
    try {
        const user = new UserModel({
            username: req.body.username,
            password: req.body.password
        });
// Kollar om användarnamnet är upptaget, om inte så skapa användare annars skicka 400.
        const findUser = await UserModel.findOne({ username: req.body.username});
        if (!findUser) {
            await user.save()
            res.status(200).json({status: user.username + ' ' + 'Registered'});
        } else {
            res.status(400).json(`Username: ${user.username} already exist`);
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