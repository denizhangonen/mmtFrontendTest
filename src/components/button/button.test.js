import React from 'react';

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './button'

configure({adapter: new Adapter()});

describe("<Button /> component tests", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button />)
    })

    it("should contain <button> element", () => {
        expect(wrapper.find("button").exists()).toBe(true);
    });

    // it("should render given children", () => {
    //     wrapper.setProps({children: 'test'});
    //     const wrapper2 = shallow(<Button>Test</Button>)
    //     console.log(wrapper)
    //     console.log(wrapper2)
    //     expect(wrapper2.find("test").exists).toBe(true);
    // })

})