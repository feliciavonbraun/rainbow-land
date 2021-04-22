const express = require('express');
const port = 4000; 
const carouselRouter = require('./routers/carousel.router.js');
const userRouter = require('./routers/user.router.js')
//import userRouter from './routers/user.router.js';
const app = express();


app.use((req, res, next) => {
    console.log(req.method + " " + req.path);
    next();
})


// All routers for the application
app.use('/api/carousels', carouselRouter);
app.use('/api/users', userRouter);

// Start the application
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})







// const express = require('express');
// const app = express();
// const port = 4000;

// const test = [
//     {
//         "name": "mike",
//         "age": "2"
//     }
// ]

// app.use(express.json());
// app.get('/', (req, res) => {
//     res.send(test);
// })

// app.listen(port, () => {
//     console.log(`Server is running on port http://localhost:${port}`);
// })