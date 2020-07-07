import React, { useEffect, useState } from 'react';

import { pokeapi } from '../../services/api';
import ColorFromType from '../../services/colors';

import './styles.css';

export default function PokemonCard ({ id, onSelection }) {
  const [pokemon, setPokemon] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    pokeapi.get(`pokemon/${id}`)
      .then(response => {
        const { name, sprites, types } = response.data;  

        setPokemon({
          name: name.charAt(0).toUpperCase() + name.slice(1),
          sprite: sprites.front_default,
          type: types[0].type.name
        });
        setPrice((Math.floor(Math.random() * 1400) + 100) * 10);
      });
  }, [id]);

  function handleClick () {
    onSelection({
      id,
      name: pokemon.name,
      sprite: pokemon.sprite,
      price
    });
  }
  
  return (
    <div className="pokemon-card" style={{backgroundColor: ColorFromType(pokemon.type)}} onClick={handleClick}>
      <div className="pokemon-info">
        <span className="id">#{id}</span>
        <h3>{pokemon.name}</h3>
        <span className="price">
          {`R$${price.toString().slice(0, -3)}.${price.toString().slice(-3)},00`}
        </span>
      </div>
      <img src={pokemon.sprite} alt={pokemon.name} />
    </div>
  );
}