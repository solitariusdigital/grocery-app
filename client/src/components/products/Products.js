import React, { Component } from 'react';
import './Products.css'

export default class Products extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        fetch('/grocery')
        .then(res => res.json())
        .then(products => this.setState({products}, () => console.log('products fetched...', products)))
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.products.map(product => 
                        <li key={product.name}>{product.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}
