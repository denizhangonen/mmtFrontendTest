import React, { Component } from "react";

import BasketContent from "./basketContent/basketContent";
import BasketFooter from "./basketFooter/basketFooter";

import "./basket.css";

export class Basket extends Component {
  state = {
    items: [],
    totalPrice: 0
  };

  componentDidMount() {
    // get items
  }

  removeItemsHandler = () => {
    // loop through items and reset quantities to zero and do keep items in the basket
  };

  render() {
    console.log("basket says hi");
    const { items, totalPrice } = this.state;
    let basketContent = null;
    // If there are any items update content otherwise prevent rendering
    if (items.length > 0) {
      basketContent = <BasketContent items={items} />;
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
