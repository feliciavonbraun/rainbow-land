const express = require('express');
const port = 4000; 
const carouselRouter = require('./routers/carousel.router.js');
const userRouter = require('./routers/user.router.js')
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.method + " " + req.path);
    next();
})

// All routers for the application
app.use('/api/carousel', carouselRouter);
app.use('/api/user', userRouter);



// Start the application
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
