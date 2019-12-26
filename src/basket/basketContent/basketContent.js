import React from "react";

import BasketItem from "./basketItem/basketItem";

const basketContent = props => {
  let itemsTable = null;
  if (props.items.length > 0) {
    itemsTable = props.items.map(i => {
      return (
        <BasketItem
          key={i.id}
          item={i}
          removeItem={props.removeItem}
          quantityUpdated={props.quantityUpdated}
        />
      );
    });
  }
  return <div>{itemsTable}</div>;
};

export default basketContent;
