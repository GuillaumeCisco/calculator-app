import React from 'react';
import {shallow, mount} from 'enzyme';
import Calculator from './index';

test('Render correctly on loading', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = shallow(<Calculator {...props} />);
    expect(container.find('Result').exists()).toBeTruthy();
    expect(container.find('Buttons').exists()).toBeTruthy();
});


test('Input number', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');

    expect(container.state('compute')).toEqual('');

    // click on button 1
    const spy = jest.spyOn(container.instance(), 'set');
    button1.simulate('click');
    expect(spy).toHaveBeenCalledWith('1');
    spy.mockClear();

    expect(container.state('compute')).toEqual('1');
    expect(container.state('result')).toEqual(1);
});

test('Simple operator operation', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button3 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '3');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');

    expect(container.state('compute')).toEqual('');

    // click on buttons 1, +, 3
    button1.simulate('click');
    buttonPlus.simulate('click');
    button3.simulate('click');

    expect(container.state('compute')).toEqual('1+3');
    expect(container.state('result')).toEqual(4);
});

test('Complex operator operation', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button3 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '3');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const button6 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '6');
    const button8 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '8');
    const button9 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '9');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonMinus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '-');
    const buttonDivision = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '/');
    const buttonMul = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '*');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 - 8 + 1 * 3 - 9 / 6
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonMinus.simulate('click');
    button8.simulate('click');
    buttonPlus.simulate('click');
    button1.simulate('click');
    buttonMul.simulate('click');
    button3.simulate('click');
    buttonMinus.simulate('click');
    button9.simulate('click');
    buttonDivision.simulate('click');
    button6.simulate('click');

    expect(container.state('compute')).toEqual('2+4-8+1*3-9/6');
    expect(container.state('result')).toEqual('-0.50');
});

test('Equal operator operation', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonEqual = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '=');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + 1 =
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    button1.simulate('click');
    buttonEqual.simulate('click');

    expect(container.state('compute')).toEqual('2+4+1');
    expect(container.state('result')).toEqual(7);
    expect(container.state('toReset')).toBe(true)
});

test('Equal operator and keep going operation', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonEqual = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '=');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + 1 = + 4
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    button1.simulate('click');
    buttonEqual.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');

    expect(container.state('compute')).toEqual('7+4');
    expect(container.state('result')).toEqual(11);
});

test('Switch operator', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonMinus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '-');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + - 1
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    buttonMinus.simulate('click');
    button1.simulate('click');

    expect(container.state('compute')).toEqual('2+4-1');
    expect(container.state('result')).toEqual(5);
});

test('Del operator', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonDel = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === 'DEL');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + DEL
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    buttonDel.simulate('click');

    expect(container.state('compute')).toEqual('2+4');
    expect(container.state('result')).toEqual(6);
});

test('AC operator', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const button8 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '8');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonAC = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === 'AC');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + 8 + AC
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    button8.simulate('click');
    buttonAC.simulate('click');

    expect(container.state('compute')).toEqual('');
    expect(container.state('result')).toEqual('');
});

test('Switch operator + ,', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button4 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '4');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonComma = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === ',');

    expect(container.state('compute')).toEqual('');

    // compute to be 2 + 4 + , 2
    button2.simulate('click');
    buttonPlus.simulate('click');
    button4.simulate('click');
    buttonPlus.simulate('click');
    buttonComma.simulate('click');
    button2.simulate('click');

    expect(container.state('compute')).toEqual('2+4+.2');
    expect(container.state('result')).toEqual('6.20');
});


test('Float numbers', () => {
    const props = {
        compute: '',
        result: '',
        toReset: false
    };

    const container = mount(<Calculator {...props} />);

    const button1 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '1');
    const button2 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '2');
    const button0 = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '0');
    const buttonPlus = container.find('Operators button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === '+');
    const buttonComma = container.find('Inputs button').findWhere(x => x.type() === 'button' && x.childAt(0).html() === ',');

    expect(container.state('compute')).toEqual('');

    // compute to be 0 , 1 + 0 , 2
    button0.simulate('click');
    buttonComma.simulate('click');
    button1.simulate('click');
    buttonPlus.simulate('click');
    button0.simulate('click');
    buttonComma.simulate('click');
    button2.simulate('click');

    expect(container.state('compute')).toEqual('0.1+0.2');
    expect(container.state('result')).toEqual('0.30');
});
