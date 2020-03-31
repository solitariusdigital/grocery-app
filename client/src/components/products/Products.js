import React, { Component } from 'react';

import './Products.css'

export default class Products extends Component {
      
    renderProducts = (product, index) => {
        return (
            <div key={index} className="product-grid">
                <img 
                    className="product-img" 
                    src={require(`../../data/images/${product.image}`)} 
                    alt="">
                </img>
                <h3 className="product-data">{product.name}</h3>
                <h3 className="product-data">{`Price: $ ${product.price}`}</h3>
                <h4 className="product-data">{`Category: ${product.category}`}</h4>
                <h4 className="product-data">{`Rating: ${product.rating}`}</h4>
            </div>
        )
    } 

    render() {
        
        const { products } = this.props

        return (
            <div className="product-card">
                {products.map(this.renderProducts)}
            </div>
        )
    }
}