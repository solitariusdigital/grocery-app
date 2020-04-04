const express = require('express');
const productsList = require('./client/src/data/productsList');

const app = express();

app.get('/grocery', (req, res) => {

    let searchTerm = req.query.searchTerm

    if(!searchTerm) {
        console.log('no search term returning the top 4 items, list of items:', productsList);
        return res.json(productsList.slice(0, 4));
    } else {
        console.log('search term provided:', searchTerm);
        const products = productsList.filter(product => {
            return product.name.toLowerCase().match(searchTerm.toLowerCase())
        });
        return res.json(products);
    }
});

const port = 5000;
app.listen(port, () => console.log(`server is listening on port ${port}`))