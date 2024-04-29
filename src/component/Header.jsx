import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartContext = useContext(CartContext);

  const cartLength = cartContext.items.reduce((totalItems, item) => {
    return totalItems + item.quantity;
  }, 0);
  console.log(cartLength);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="restaurant_logo" />
        <h1>Foodie</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({cartLength})</Button>
      </nav>
    </header>
  );
};

export default Header;
