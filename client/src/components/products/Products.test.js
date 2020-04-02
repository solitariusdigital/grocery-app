import React from 'react';
import { shallow } from 'enzyme';
import Products from './Products';

it('renders products name', () => {
    const fakeProducts = [
        {
            name: "Brown eggs",
            category: "Diary",
            image: "0.jpg",
            price: 28.1,
            rating: 4
        }, 
    ];

    const wrapper = shallow(<Products products={fakeProducts} />);
    const productsName = wrapper.find('h4.product-name').text();
    const fakeProductsName = fakeProducts.map(product => product.name);

    expect(productsName).toContain(fakeProductsName);
});