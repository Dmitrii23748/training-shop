import React from "react";
import MensFilter from "../Components/MensFilter/MensFilter";
import Mens from "../Components/Mens/Mens";

function MensPage() {
  return (
    <div data-test-id={`clothes-/training-shop/mens`}>
      <MensFilter />
      <Mens />
      <div className="square-block">
        <div className="container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default MensPage;
