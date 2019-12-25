import React from "react";

import Button from "../../components/button/button";

const basketFooter = props => {
  return (
    <div>
      <span>{props.totalPrice}</span>
      <span>
        <a href="#" onClick={props.removeItems}>
          Clear
        </a>
      </span>
      <span>
        <Button>Check Out</Button>
      </span>
    </div>
  );
};

export default basketFooter;
