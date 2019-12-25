import React, { Component } from "react";

import BasketContent from "./basketContent/basketContent";
import BasketFooter from "./basketFooter/basketFooter";

export class Basket extends Component {
  state = {
    items: [],
    totalPrice: 0
  };

  componentDidMount() {
    // get items
  }

  render() {
    const { items, totalPrice } = this.state;
    let basketContent = null;
    if (items.length > 0) {
      basketContent = <BasketContent items={items} />;
    }
    return (
      <div>
        {basketContent}
        <BasketFooter totalPrice={totalPrice} />
      </div>
    );
  }
}

export default Basket;
