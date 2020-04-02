import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

it('simulate onChange for input search', () => {

    const mockOnChange = jest.fn();
    const wrapper = shallow(<SearchBar onChange={mockOnChange} />);
    wrapper.find('input').simulate('change', { target: {value: 'strawberry'} });

    expect(mockOnChange).toBeCalledWith({ target: {value: 'strawberry'} });
});