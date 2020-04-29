import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {css} from 'emotion';
import {ice} from '../colors';

const layout = css`
    height: 62px;
    background-color: ${ice};
    text-align: right;
    font-size: 26px;
    padding: 15px;
`;

const span = css`
    display: block;
    transition: font-size 0.3s;
`;

class Result extends Component {
    getComputeCSS = () => {
        return css`
            ${span};
            overflow-x: auto;
            font-size: ${this.props.toReset ? 18 : 26}px;
        `;
    }

    getResultCSS = () => {
        return css`
            ${span};
            font-size: ${this.props.toReset ? 26 : 18}px;
        `;
    }

    render() {
        const {compute, result} = this.props;

        return (<div className={layout}>
            <span className={this.getComputeCSS()}>{compute}</span>
            <span className={this.getResultCSS()}>{result}</span>
        </div>);
    }
}

Result.defaultProps = {
    compute: '',
    result: '',
    toReset: false,
};

Result.propTypes = {
    compute: PropTypes.string,
    result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    toReset: PropTypes.bool,
};

export default Result;
