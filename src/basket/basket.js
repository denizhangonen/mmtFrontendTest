import React, { Component } from "react";

import BasketContent from "./basketContent/basketContent";
import BasketFooter from "./basketFooter/basketFooter";

import "./basket.css";

export class Basket extends Component {
  state = {
    // items: [],
    items: [],
    totalPrice: 0
  };

  componentDidMount() {
    // get items
    this.getBasketItems();
  }

  getBasketItems = () => {
    this.setState({
      items: [
        { id: "1", title: "test pro 1", quantity: 3, price: 5 },
        { id: "101", title: "test pro 2", quantity: 5, price: 9 }
      ],
      totalPrice: 14
    });
  };

  removeItemsHandler = () => {
    // loop through items and reset quantities to zero and do keep items in the basket
    console.log("removeItems has been called");
  };

  removeItemHandler = id => {
    // remove selected item
    const newBasketItems = this.state.items.filter(i => i.id !== id);

    // update state
    this.setState({ items: newBasketItems });
  };

  render() {
    console.log("basket says hi");
    const { items, totalPrice } = this.state;
    let basketContent = null;
    // If there are any items update content otherwise prevent rendering
    if (items.length > 0) {
      basketContent = (
        <BasketContent items={items} removeItem={this.removeItemHandler} />
      );
    }

    return (
      <div className="basket">
        {basketContent}
        <BasketFooter
          totalPrice={totalPrice}
          removeItems={this.removeItemsHandler}
        />
      </div>
    );
  }
}

export default Basket;
