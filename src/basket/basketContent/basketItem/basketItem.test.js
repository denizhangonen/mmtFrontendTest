import React from "react";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BasketItem from "./basketItem";

configure({ adapter: new Adapter() });

describe("<BasketItem /> Tests", () => {
  let wrapper;
  let item = {};
  beforeEach(() => {
    wrapper = shallow(<BasketItem item={item} />);
  });

  it("should render a tr with the class item-row", () => {
    expect(wrapper.find("tr.item-row").exists()).toBe(true);
  });

  it("should render 4 td elements", () => {
    expect(wrapper.find("td")).toHaveLength(4);
  });

  it("should render title prop in the element with class item-title", () => {
    const title = "Pink Floyd";
    wrapper.setProps({ item: { title: title } });

    expect(wrapper.find(".item-title").html()).toContain(title);
  });

  it("should render price prop in the element with class item-price", () => {
    const price = 88;
    wrapper.setProps({ item: { price: price } });

    expect(wrapper.find(".item-price").html()).toContain(price);
  });

  it("should render quantity prop in the input element", () => {});

  it("should call mock function when a is clicked", () => {});

  it("should call mock quantityUpdated func when input changed", () => {});
});
