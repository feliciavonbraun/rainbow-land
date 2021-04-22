const express = require('express');
const carouselRouter = require('./routers/carousel.router.js');
const userRouter = require('./routers/user.router.js');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const PORT = 4000; 
const app = express();


async function connectToDatabase() {
    try {
        const url = 'mongodb://localhost:27017/rainbowLand';
        const options = { useUnifiedTopology: true };
        const client = await mongodb.connect(url, options);
       // console.log('Connection to database has been established');
        const db = await client.db('rainbowLand');
       // console.log('Database has been created')
        return db;
    } catch (error) {
       console.error(error);
    }
};

/**
 * @param {mongodb.Db} db 
 * @param {String[]} collectionNames 
 */
async function createCollections(db, collectionNames) {
    const collections = {};
    for (const name of collectionNames) {
       const collection = await db.createCollection(name);
       collections[name] = collection;
    }
    console.log('Collection has been created!');
    return collections;
}

(async function davidsRun() {
    const db = await connectToDatabase();
    const collections = await createCollections(db, ['user', 'carousel']);
    console.log(collections);
})();


app.use(express.json())

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json(err.message);
    console.log(req.method + " " + req.path);    
    next();
});

// All routers for the application
app.use('/api/carousel', carouselRouter);
app.use('/api/user', userRouter);


(async function run() {
    try {
        await mongoose.connect('mongodb://localhost:27017/rainbowLand', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database is connected');
    } catch (error) {
        console.error(error);
    }
    
    // Start the application
    app.listen(PORT, () => {
        console.log(`Server is running on PORT http://localhost:${PORT}`);
    });
})();
