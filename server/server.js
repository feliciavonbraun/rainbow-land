const express = require('express');
const carouselRouter = require('./routers/carousel.router.js');
const userRouter = require('./routers/user.router.js');
const mongoose = require('mongoose');
require('express-async-errors');
const PORT = 4000; 
const app = express();


app.use(express.json())

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