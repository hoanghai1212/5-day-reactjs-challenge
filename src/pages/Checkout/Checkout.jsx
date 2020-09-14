import React, { Fragment } from "react";
import "./Checkout.scss";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { Link } from "react-router-dom";
import Product from "../Home/Product/Product";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <Fragment>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="ad"
          />
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket.length ? (
              basket.map((item, index) => (
                <CheckoutProduct key={index} item={item} />
              ))
            ) : (
              <p className="checkout__noitems">
                You have no items in your basket. To buy one or more items,
                click "Add to basket" next to the item.{" "}
                <Link className="checkout__return" to="/">
                  Get something now
                </Link>
              </p>
            )}
          </div>
        </div>
        <div className="checkout__right">
          {basket.length ? <Subtotal /> : ""}
        </div>
      </div>
      <div className="checkout__suggestions">
        <h2 className="checkout__title">Product you might want</h2>
        <div className="checkout__suggestionsProducts">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            rating={5}
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            rating={5}
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Checkout;
