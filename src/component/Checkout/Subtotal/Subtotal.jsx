import React, { Fragment } from "react";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.scss";
import { useStateValue } from "../../../ContextAPI/StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  const getBasketTotal = (basket) =>
    basket.reduce((sum, currentProd) => ({
      price: sum.price + currentProd.price,
    })).price;

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}
export default Subtotal;
