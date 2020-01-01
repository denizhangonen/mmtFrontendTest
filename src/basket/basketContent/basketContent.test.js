import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BasketContent from "./basketContent";
import BasketItem from "./basketItem/basketItem";

configure({ adapter: new Adapter() });

describe("<BasketContent /> Tests", () => {
  let wrapper;
  let items = [];
  beforeEach(() => {
    wrapper = shallow(<BasketContent items={items} />);
  });

  it("should render a div with the class basketContent", () => {
    expect(wrapper.find("div.basketContent").exists()).toBe(true);
  });

  it("should not render BasketItem component when items array is empty", () => {
    wrapper.setProps({ items: [] });
    expect(wrapper.find(BasketItem)).toHaveLength(0);
  });

  it("should render 2 BasketItem components when items array contains 2 elements", () => {
    wrapper.setProps({ items: [{ id: 1 }, { id: 2 }] });
    expect(wrapper.find(BasketItem)).toHaveLength(2);
  });
});
