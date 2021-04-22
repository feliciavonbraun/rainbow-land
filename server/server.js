const express = require('express');
const carouselRouter = require('./routers/carousel.router.js');
const userRouter = require('./routers/user.router.js');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const PORT = 4000; 
const app = express();

// TODO
async function connect() {
    const client = mongodb.connect('', );

};


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
