import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "./button";

configure({ adapter: new Adapter() });

describe("<Button /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it("should contain <button> element", () => {
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("should render given children", () => {
    const checkout = "Checkout";
    wrapper.setProps({ children: checkout });
    expect(wrapper.props().children).toEqual(checkout);
  });
});
