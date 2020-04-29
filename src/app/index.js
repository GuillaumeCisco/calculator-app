import React, {Component} from 'react';
import {css} from 'emotion';

import Result from './result';
import Buttons from './buttons';

const layout = css`
    width: 300px;
`;

class Calculator extends Component {
    state = {
        compute: '',
        result: '',
        toReset: false,
    }

   compute = (toCompute = '') => {
        let result = '';
        try {
            // TODO improve with bignumber.js
            result = toCompute
                ? eval(toCompute) // eslint-disable-line no-eval
                : eval(this.state.compute); // eslint-disable-line no-eval
        }
        // eslint-disable-next-line no-empty
        catch (e) {
        }
        return result;
   }

    getResult = value => value % 1 === 0 ? value : value.toFixed(2)

    set = value => () => {
        if (value === '=') {
            const result = this.getResult(this.compute());
           this.setState(state => ({...state, result, toReset: result !== ''}));
        }
        else {
            let compute = `${this.state.toReset ? this.state.result : this.state.compute}${value}`;
            // if operator or ,
            if (['+', '-', '/', '*', '.'].includes(value)) {
                // if last character is an operator switch it
                if (['+', '-', '/', '*'].includes(this.state.compute[this.state.compute.length - 1]) && value !== '.') {
                    compute = `${this.state.compute.slice(0, this.state.compute.length - 1)}${value}`;
                }
                this.setState(state => ({...state, compute, toReset: false}));
            }
            // if digit
            else {
                this.setState({compute, result: this.getResult(this.compute(compute)), toReset: false});
            }
        }
    }

    reset = () => {
        this.setState({compute: '', result: '', toReset: false});
    }

    cancel = () => {
        const compute = this.state.compute.slice(0, this.state.compute.length - 1);

        let result = '';
        try {
            // eslint-disable-next-line no-eval
            result = eval(compute);
            this.setState(state => ({compute, result}));
        }
        catch (e) {
            this.setState(state => ({compute, result}));
        }
    }

    render() {
        const {compute, result, toReset} = this.state;

        return (
            <div className={layout}>
                <Result compute={compute} result={result} toReset={toReset} />
                <Buttons reset={this.reset} cancel={this.cancel} set={this.set} />
            </div>
        );
    }
}

export default Calculator;
