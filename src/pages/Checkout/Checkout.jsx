import React from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.length ? (
            <CheckoutProduct />
          ) : (
            <p className="checkout__noitems">
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.{" "}
              <Link className="checkout__return" to="/">
                Return home page
              </Link>
            </p>
          )}
        </div>
      </div>
      <div className="checkout__right">{basket.length ? <Subtotal /> : ""}</div>
    </div>
  );
}

export default Checkout;
