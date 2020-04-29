import React from 'react';
import PropTypes from 'prop-types';

import {css} from 'emotion';
import {noop} from '../utils';
import {gold, white} from '../../colors';
import {buttonCSS, middleCSS} from './common';


const operators = css`
    ${middleCSS};
    width: 25%;
`;
const button = css`
    ${buttonCSS};
    width: 100%;
    color: ${gold};
`;

const equal = css`
    ${button};
    background-color: ${gold};
    color: ${white};
`;

const Operators = ({set}) =>
    <div className={operators}>
        <button type="button" className={button} onClick={set('/')}>/</button>
        <button type="button" className={button} onClick={set('*')}>*</button>
        <button type="button" className={button} onClick={set('-')}>-</button>
        <button type="button" className={button} onClick={set('+')}>+</button>
        <button type="button" className={equal} onClick={set('=')}>=</button>
    </div>;

Operators.defaultProps = {
    set: noop,
};

Operators.propTypes = {
    set: PropTypes.func,
};

export default Operators;
