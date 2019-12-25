import React from "react";

import "./basketItem.css";

const basketItem = props => {
  return (
    <tr className="item-row">
      <td className="item-title">{props.item.title} </td>
      <td className="item-quantity">{props.item.quantity}</td>
      <td className="item-price">{props.item.price}</td>
      <td>
        <a onClick={() => props.removeItem(props.item.id)}> X </a>
      </td>
    </tr>
  );
};

export default basketItem;
