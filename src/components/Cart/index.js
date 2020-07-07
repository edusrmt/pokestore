import React, { useState, useEffect } from 'react';
import { X } from 'react-feather';

import CartItem from '../CartItem';

import './styles.css';

export default function Cart ({ pokemons, changeAmount, toggleCart, checkOut }) {
  const [total, setTotal] = useState('');

  useEffect(() => {
    let final = 0;

    pokemons.forEach(item => {
      final += item.amount * item.price;
    });

    setTotal(final === 0 ? 'R$0,00' : `R$${final.toString().slice(0, -3)}.${final.toString().slice(-3)},00`);
  }, [pokemons]);

  return(
    <div className="cart-container">
      <div className="cart-header">
        <h2>Meus Pokémons</h2>
        <X onClick={() => toggleCart(false)} />
      </div>
      <div className="cart-content">
        {
          pokemons
            .sort((a,b) => a.id - b.id)
            .map(pokemon => (
              <CartItem pokemon={pokemon} key={pokemon.id} changeAmount={changeAmount} />
            ))
        }
      </div>
      <div className="cart-footer">
        <div className="price-display">
          <span className="label">Preço Final:</span>
          <span className="value">{total}</span>
        </div>
        <button onClick={checkOut}>Finalizar compra</button>
      </div>
    </div>
  );
}