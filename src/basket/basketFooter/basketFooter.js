import React from "react";

import Button from "../../components/button/button";

const basketFooter = props => {
  return (
    <div className="basketFooter">
      <span className="totalPrice">{props.totalPrice}</span>
      <span className="clear">
        <a href="#" onClick={props.removeItems}>
          Clear
        </a>
      </span>
      <span className="checkout">
        <Button>Check Out</Button>
      </span>
    </div>
  );
};

export default basketFooter;
