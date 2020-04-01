import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';


it('simulates click events', () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find('input');
    input.simulate('change', { target: {value: 'strawberry'} });

    expect(input.prop('value')).toEqual('strawberry');
});
