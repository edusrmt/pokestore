import React from 'react';
import { PlusCircle, MinusCircle } from 'react-feather';

import './styles.css';

export default function CartItem ({ pokemon, changeAmount }) {
  return(
    <div className="pokemon-container">
      <div className="pokemon-data">
        <div className="pokemon-amount">
          <PlusCircle size={20} onClick={() => changeAmount(pokemon.id, 1)} />
          <span>{pokemon.amount}</span>
          <MinusCircle size={20} onClick={() => changeAmount(pokemon.id, -1)} />
        </div>
        <div className="pokemon-info">
          <h3>{pokemon.name}</h3>
          <span>{`R$${pokemon.price.toString().slice(0, -3)}.${pokemon.price.toString().slice(-3)},00`}</span>
        </div>
      </div>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}