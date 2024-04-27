import React from 'react'
import logo from "../assets/logo.jpg";
import Button from './UI/Button';

const Header = () => {
  return (
    <header id="main-header">
        <div id="title">
            <img src={logo} alt="restaurant_logo" />
            <h1>Foodie</h1>
        </div>
        <nav>
            <Button textOnly>Cart (0)</Button>
        </nav>
    </header>
  )
}

export default Header