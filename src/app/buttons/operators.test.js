import React from 'react';
import {shallow} from 'enzyme';
import Operators from './operators';

test('Operators renders correctly', () => {
    const container = shallow(<Operators />);
    expect(container.find('div')).toHaveLength(1);
    expect(container.find('button')).toHaveLength(5);
});
