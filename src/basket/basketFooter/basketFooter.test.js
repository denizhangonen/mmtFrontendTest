import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BasketFooter from "./basketFooter";
import Button from "../../components/button/button";

configure({ adapter: new Adapter() });

describe("<BasketFooter /> component tests", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BasketFooter />);
  });

  it("should render a div with the className basketFooter", () => {
    expect(wrapper.find("div.basketFooter").exists()).toBe(true);
  });

  it("should contains 3 spans", () => {
    expect(wrapper.find("span")).toHaveLength(3);
  });

  it("should render a Button", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it("should display given total price as a prop", () => {
    const totalPrice = 88;
    wrapper.setProps({ totalPrice: totalPrice });
    expect(wrapper.html()).toContain(totalPrice);
  });
});
