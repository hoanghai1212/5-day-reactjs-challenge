import React, { useRef, useState, useEffect } from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../../ContextAPI/StateProvider";

function CheckoutProduct({ item }) {
  const { id, title, image, price, rating, quantity } = item;
  const [{}, dispatch] = useStateValue();
  const productRef = useRef(null);

  const removeProductHandler = () => {
    let timer;
    productRef.current.classList.add("fadeout");

    timer = setTimeout(() => {
      clearTimeout(timer);
      productRef.current && productRef.current.classList.remove("fadeOut");
      dispatch({
        type: "REMOVE_FROM_BASKET",
        payload: { id },
      });
    }, 200);
  };

  const handleInputQuantityChange = (value) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id, quantity: value },
    });
  };

  const handleButtonQuantityChange = (type) => {
    dispatch({
      type: "CHANGE_QUANTITY",
      payload: { id, type },
    });
  };
  return (
    <div className="checkoutProduct" ref={productRef}>
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
        <div className="checkoutProduct__quantity">
          <button
            onClick={() => {
              handleButtonQuantityChange("sub");
            }}
          >
            -
          </button>

          <input
            value={quantity}
            onInput={(e) => {
              if (e.target.validity.valid && +e.target.value < 1000) {
                handleInputQuantityChange(e.target.value);
              }
            }}
            onBlur={(e) => {
              if (e.target.value === "") {
                return handleInputQuantityChange(1);
              }
              if (+e.target.value === 0) {
                removeProductHandler();
              }
            }}
            pattern="[0-9]*"
          />

          <button
            onClick={() => {
              handleButtonQuantityChange("add");
            }}
          >
            +
          </button>
        </div>
        <button onClick={removeProductHandler}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
