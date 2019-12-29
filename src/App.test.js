import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Basket from "./basket/basket";

configure({ adapter: new Adapter() });

describe("<App /> Component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render a div with classname App", () => {
    expect(wrapper.find("div.App").exists()).toBe(true);
  });

  it("should contain Basket component", () => {
    expect(wrapper.find(Basket)).toHaveLength(1);
  });
});
