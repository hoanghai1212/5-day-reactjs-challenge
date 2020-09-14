import React, { useState } from "react";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./Product.scss";
import { useStateValue } from "../../../ContextAPI/StateProvider";
function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const [onAdd, setOnAdd] = useState(false);

  const addToBasketHandler = () => {
    let timer;
    setOnAdd(true);
    timer = setTimeout(() => {
      clearTimeout(timer);
      setOnAdd(false);
    }, 100);

    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        item: {
          id,
          title,
          image,
          price,
          rating,
        },
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />

      <button
        onClick={(e) => {
          addToBasketHandler();
        }}
        className={onAdd ? "activated" : ""}
      >
        <AddShoppingCartIcon className="product__addIcon" /> Add to basket
      </button>
    </div>
  );
}

export default Product;
