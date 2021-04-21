const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const userRouter = require('./routers/user.router');

const PORT = 4000;
const app = express();

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World'));

// app.use(userRouter);

// (async function run() {
//     await mongoose.connect('mongodb//localhost:27017/art', { useNewUrlParser: true, useUnifiedTopology: true});
    
//     app.listen(PORT, () => {
//         console.log(`Server is running on port http://localhost:${PORT}`);
//     })
// })();
