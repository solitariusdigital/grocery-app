import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import SearchBar from './components/searchbar/SearchBar';
import Products from './components/products/Products';
import Footer from './components/footer/Footer';

it('should render SearchBar, Products and Footer', () => {
    
    const wrapper = shallow(<App />);

    const searchbar = wrapper.find(SearchBar);
    expect(searchbar.exists()).toBe(true);

    const products = wrapper.find(Products);
    expect(products.exists()).toBe(true);

    const footer = wrapper.find(Footer);
    expect(footer.exists()).toBe(true);
});