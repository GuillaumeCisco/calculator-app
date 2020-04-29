import React from 'react';
import {shallow} from 'enzyme';
import Buttons from './index';

test('Buttons renders correctly', () => {
    const container = shallow(<Buttons />);
    expect(container.find('Inputs').exists()).toBeTruthy();
    expect(container.find('Operators').exists()).toBeTruthy();
});
