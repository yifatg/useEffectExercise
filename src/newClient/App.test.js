import React from 'react';
import Box from './components/UI';
import Enzyme, { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
//Enzyme.configure({ adapter: new Adapter() });
//test('test without errors', () =>{
    //const wrapper = shallow(<App />);
    //const boxComponent = wrapper.find("[data-test='box']");
    //expect(boxComponent.length).toBe(1);
//});