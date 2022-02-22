import React from "react";
import Womens from "../Components/Womens/Womens";
import WomensFilter from "../Components/WomensFilter/WomensFilter";

function WomensPage() {
  return (
    <div data-test-id={`clothes-/training-shop/womens`}>
      <WomensFilter />
      <Womens />
      <div className="square-block">
        <div className="container">
          <div className="square"></div>
        </div>
      </div>
    </div>
  );
}

export default WomensPage;
