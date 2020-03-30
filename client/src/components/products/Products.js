import React, { Component } from 'react';

import './Products.css'

export default class Products extends Component {
    
    state = {
        fetchedProducts: [],
    }
    
    componentDidMount() {
        fetch('/grocery')
        .then(res => res.json())
        .then(fetchedProducts => this.setState({fetchedProducts}, () => console.log('products fetched...', fetchedProducts)))
    }
    
    renderProducts = (product, index) => {
        // if(product.name.toLowerCase().includes(this.props)) 
        return (
            <div className="product-card" key={index}>
                <p>{product.name} {product.rating}</p>
                <img className="product-img" src={require(`../../data/images/${product.image}`)}></img>
            </div>
        )
    } 

    render() {
        // console.log('props', this.props)
        
        const { fetchedProducts } = this.state

        return (
            <div>
                {fetchedProducts.map(this.renderProducts)}
            </div>
        )
    }
}