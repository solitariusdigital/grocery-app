const express = require('express');
const products = require('./client/src/data/products');

const app = express();

app.get('/grocery', (req, res) => {
    res.json(products);
});

const port = 5000;
app.listen(port, () => console.log(`server is listening on port ${port}`));