import React, { Component } from 'react'
import Products from './components/products/Products'
import SearchBar from './components/searchbar/SearchBar'
import Footer from './components/footer/Footer'

import './App.css'

export default class App extends Component {

  state = {
    fetchedProducts: [],
    search: '',
    products: []
  }

  componentDidMount() {
    fetch('/grocery')
    .then(res => res.json())
    .then(fetchedProducts => this.setState({fetchedProducts}, () => console.log('products fetched...', fetchedProducts)))
  }

  handleChange = e => {
    this.setState({
        search: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();

    const { search, fetchedProducts } = this.state

    const products = fetchedProducts.filter(product => {
      return product.name.toLowerCase().match(search.toLowerCase())
    });
    this.setState({ products })
  }

  render() {

    const { products, search } = this.state

    return (
      <React.Fragment>
        <div className="container">
          <SearchBar 
            onChange={this.handleChange}
            onClick={this.handleClick}
            value={search}
          />
          <Products products={products} />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}