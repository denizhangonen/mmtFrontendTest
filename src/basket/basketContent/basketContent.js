import React from "react";

import BasketItem from "./basketItem/basketItem";

const basketContent = props => {
  let itemsTable = null;
  if (props.items.length > 0) {
    itemsTable = props.items.map(i => {
      return <BasketItem item={i} removeItem={props.removeItem} />;
    });
  }
  return <div>{itemsTable}</div>;
};

export default basketContent;
