import React, { Fragment } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.scss";
import { useStateValue } from "../../../ContextAPI/StateProvider";
import {
  getBasketTotal,
  getBasketTotalItem,
} from "../../../ContextAPI/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket }] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <Fragment>
            <p>
              Subtotal ({getBasketTotalItem(basket)} items):{" "}
              <strong>{value}</strong>
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

      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}
export default Subtotal;
