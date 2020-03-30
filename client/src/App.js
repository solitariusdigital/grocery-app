import React, { Component } from 'react'
import Products from './components/products/Products'

import './App.css'

export default class SearchBar extends Component {

  state = {
    search: '',
    searchedProduct: ''
  }

  handleChange = e => {
    this.setState({
        search: e.target.value
    })
    // console.log(this.state.search)
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
        searchedProduct: this.state.search
    })
    // console.log(this.state.searchedProduct)
  }

  render() {

    const { searchedProduct } = this.state

    return (
      <React.Fragment>
        <form className="search-bar">
          <input 
            className="search-input" 
            type="text" 
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button className="search-btn" onClick={this.handleClick}>
            Search
          </button>
        </form>
        <Products searchedProduct={searchedProduct} />
      </React.Fragment>
    )
  }
}