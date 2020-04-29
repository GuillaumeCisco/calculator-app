import React from 'react';
import PropTypes from 'prop-types';

import Inputs from './inputs';
import Operators from './operators';
import {noop} from '../utils';


const Buttons = ({reset, cancel, set}) =>
    <div>
        <Inputs reset={reset} cancel={cancel} set={set} />
        <Operators set={set} />
    </div>;

Buttons.defaultProps = {
    reset: noop,
    cancel: noop,
    set: noop,
};

Buttons.propTypes = {
    reset: PropTypes.func,
    cancel: PropTypes.func,
    set: PropTypes.func,
};

export default Buttons;
