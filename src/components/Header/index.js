import React from 'react';
import { ShoppingBag } from 'react-feather';

import './styles.css';
import logo from '../../assets/logo.png';

export default function Header ({ cartAmount, toggleCart }) {
  return(
    <header>
      <img src={logo} className="logo" alt="Pokéstore Logo" />
      <div className="cart" onClick={() => toggleCart(true)}>
        <span>{cartAmount}</span>
        <ShoppingBag size={20} />
      </div>
    </header>
  );
}