const express = require('express');
const app = express();
const port = 4000;

const test = [
    {
        "name": "mike",
        "age": "23"
    }
]

app.use(express.json());
app.get('/', (req, res) => {
    res.send(test);
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})