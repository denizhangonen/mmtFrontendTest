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
    const resetedItems = this.state.items.map(i => {
      return { ...i, quantity: 0 };
    });
    this.setState({ items: resetedItems, totalPrice: 0 });
  };

  removeItemHandler = id => {
    // remove selected item
    const newBasketItems = this.state.items.filter(i => i.id !== id);

    // update state
    this.setState({ items: newBasketItems });
  };

  quantityUpdatedHandle = (id, val) => {
    // Handle quantity change
    console.log(id);
    console.log(val);

    // get items current items
    let newItems = [...this.state.items];

    // find the index of updated element and update the quantity
    const updatedElementIndex = newItems.map(i => i.id).indexOf(id);
    newItems[updatedElementIndex].quantity = val;

    const basketTotal = this.basketTotalCalculator(newItems);

    //update the state
    this.setState({ items: newItems, totalPrice: basketTotal });
  };

  basketTotalCalculator = items => {
    // Return 0 if there is no items in the array
    if (items.length < 1) {
      return 0;
    }
    // Find total
    let total = items.map(i => i.quantity * i.price).reduce((a, b) => a + b);
    return total;
  };

  render() {
    const { items, totalPrice } = this.state;
    let basketContent = null;
    // If there are any items update content otherwise prevent rendering
    if (items.length > 0) {
      basketContent = (
        <BasketContent
          items={items}
          removeItem={this.removeItemHandler}
          quantityUpdated={this.quantityUpdatedHandle}
        />
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
