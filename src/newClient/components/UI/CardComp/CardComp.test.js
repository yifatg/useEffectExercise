

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CardComp from './CardComp';
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
// import 'jsdom-global/register';
// import App from '../../../App';
// import jsdom from 'jsdom'
// console.log(jsdom);
// const doc = new jsdom('<!doctype html><html><body></body></html>').window
// global.document = doc
// global.window = doc.defaultView

const defaultProps = {defaultValue:{id:18}};

//props = {}
const setup = (props = {}) =>{
    const setupProps = {...defaultProps, ...props}
    return mount(<CardComp {...setupProps} />);
    //return mount(<App />);
}

describe('test useEffect', () =>{
    let wrapper;
    beforeEach(() =>{
        wrapper = setup();
    });
    test('test renders component without errors', () =>{
        const cardComponent = findByTestAttr(wrapper, "component-card");
        expect(cardComponent.length).toBe(1);
    });
    test('test setValue get id on app mount', () =>{
        const cardComponent = findByTestAttr(wrapper, "component-card");
        expect(setValue).toHaveBeenCalledTimes(1);
    });
    test('test setValue doesnt get id when app update', () =>{
        const cardComponent = findByTestAttr(wrapper, "component-card");
        //instead of update
        wrapper.setProps();
        expect(setValue).toHaveBeenCalledTimes(0);
    });
})