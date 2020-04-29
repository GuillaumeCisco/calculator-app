import React from 'react';
import {shallow} from 'enzyme';
import Inputs from './inputs';

test('Inputs renders correctly', () => {
    const container = shallow(<Inputs />);
    expect(container.find('div')).toHaveLength(3);
    expect(container.find('button')).toHaveLength(13);
});
