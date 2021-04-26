const express = require('express');
const postRouter = require('./routers/post.router.js');
const userRouter = require('./routers/user.router.js');
const cookieSession = require('cookie-session');
const mongoose = require('mongoose');
require('express-async-errors');
const PORT = 4000; 
const app = express();

app.use(express.json())

// All routers for the application
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);
app.use(cookieSession({
    name: 'session',
    secret: 'aV3ryS3cr3tK3y',
    secure: false,
    maxAge: 1000 * 60,
    httpOnly: true
}));


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