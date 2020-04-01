import React, { Component } from 'react';

import './Products.css'

export default class Products extends Component {
      
    renderProducts = (product, index) => {
        return (
            <div key={index} className="product-grid">
                <h4 className="product-name">{product.name}</h4>
                <div className="img-container">
                    <img 
                        className="product-img" 
                        src={require(`../../data/images/${product.image}`)} 
                        alt="">
                    </img>
                </div>
                <div className="data-container">
                    <h4 className="product-data">{`Price: $${product.price}`}</h4>
                    <h5 className="product-data">{`Category: ${product.category}`}</h5>
                    <h5 className="product-data">{`Rating: ${product.rating}`}</h5>
                </div>
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