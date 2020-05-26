import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('shoudl render copy right in footer', () => {
	const wrapper = shallow(<Footer />);
	const result = wrapper.find('p').text();

	expect(result).toBe('Copyright © 2020');
});
