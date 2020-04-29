import React from 'react';
import PropTypes from 'prop-types';

import {css} from 'emotion';
import {noop} from '../utils';
import {buttonCSS, middleCSS} from './common';

const inputs = css`
    ${middleCSS};
    width: 75%;
`;

const button = css`
    ${buttonCSS};
    width: 33%;
`;

const Inputs = ({reset, cancel, set}) =>
    <div className={inputs}>
        <div>
            <button type="button" className={button} onClick={reset}>AC</button>
            <button type="button" className={button} onClick={cancel}>DEL</button>
        </div>
        <div>
            <button type="button" className={button} onClick={set('7')}>7</button>
            <button type="button" className={button} onClick={set('8')}>8</button>
            <button type="button" className={button} onClick={set('9')}>9</button>
            <button type="button" className={button} onClick={set('4')}>4</button>
            <button type="button" className={button} onClick={set('5')}>5</button>
            <button type="button" className={button} onClick={set('6')}>6</button>
            <button type="button" className={button} onClick={set('1')}>1</button>
            <button type="button" className={button} onClick={set('2')}>2</button>
            <button type="button" className={button} onClick={set('3')}>3</button>
            <button type="button" className={button} onClick={set('.')}>,</button>
            <button type="button" className={button} onClick={set('0')}>0</button>
        </div>
    </div>;

Inputs.defaultProps = {
    reset: noop,
    cancel: noop,
    set: noop,
};

Inputs.propTypes = {
    reset: PropTypes.func,
    cancel: PropTypes.func,
    set: PropTypes.func,
};

export default Inputs;
