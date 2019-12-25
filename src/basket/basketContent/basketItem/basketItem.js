import React from "react";

const basketItem = props => {
  return (
    <tr className="item-row">
      <td className="item-title">{props.item.title}</td>
      <td className="item-quantity">{props.item.quantity}</td>
      <td className="item-price">{props.item.price}</td>
    </tr>
  );
};

export default basketItem;
