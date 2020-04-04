import React, { Component } from 'react';
import Products from './components/products/Products';
import SearchBar from './components/searchbar/SearchBar';
import Footer from './components/footer/Footer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as allActions from './store/actions/action';

import './App.css'

class App extends Component {

  state = {
    searchTerm: '',
  }

  componentDidMount() {
    const {searchTerm} = this.state
    this.props.fetchProductsSuccess(searchTerm)
  };

  handleChange = e => {
    this.setState({
        searchTerm: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    const {searchTerm} = this.state
    this.props.fetchProductsSuccess(searchTerm)
  };

  render() {

    console.log(this.props)
    const { products } = this.props
    const { searchTerm } = this.state

    return (
      <React.Fragment>
        <div className="container">
          <SearchBar 
            onChange={this.handleChange}
            onClick={this.handleClick}
            value={searchTerm}
          />
          <Products products={products} />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
};

const mapStatetoProps = state => {
  return {
    products: state.products,
    pending: state.pending,
    error: state.error
  }
};

const mapDispatchToProps = dispatch => {
  return {...bindActionCreators(allActions, dispatch)}
};

export default connect(mapStatetoProps, mapDispatchToProps)(App);