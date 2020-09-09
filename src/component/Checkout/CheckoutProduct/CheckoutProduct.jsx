import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../../ContextAPI/StateProvider";

function CheckoutProduct({ product }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeProductHandler = (index) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: { index },
    });
  };
  return basket.map(({ title, image, rating, price }, i) => (
    <div className="checkoutProduct" key={i}>
      <img src={image} alt="item" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <button
          onClick={() => {
            removeProductHandler(i);
          }}
        >
          Remove from basket
        </button>
      </div>
    </div>
  ));
}

export default CheckoutProduct;
