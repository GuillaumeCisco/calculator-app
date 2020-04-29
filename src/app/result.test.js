import React from 'react';
import {shallow} from 'enzyme';
import {matchers} from 'jest-emotion';

import Result from './result';

expect.extend(matchers);

test('Result renders correctly', () => {
    const container = shallow(<Result />);
    expect(container.find('div')).toHaveLength(1);
    expect(container.find('span')).toHaveLength(2);
    expect(container.find('span').first()).toHaveStyleRule('overflow-x', 'auto');
    expect(container.find('span').first()).toHaveStyleRule('font-size', '26px');
    expect(container.find('span').at(1)).toHaveStyleRule('font-size', '18px');
});

test('Result toReset', () => {
    const container = shallow(<Result toReset={true} />);
    expect(container.find('span').first()).toHaveStyleRule('font-size', '18px');
    expect(container.find('span').at(1)).toHaveStyleRule('font-size', '26px');
});
