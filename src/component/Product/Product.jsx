import React from "react";
import "./Product.scss";
import { useStateValue } from "../../ContextAPI/StateProvider";
function Product({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasketHandler = () => {
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
      <button onClick={addToBasketHandler}>Add to basket</button>
    </div>
  );
}

export default Product;
