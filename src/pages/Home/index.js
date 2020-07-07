import React, { useState } from 'react';

import Header from '../../components/Header';
import PokemonGrid from '../../components/PokemonGrid';
import Cart from '../../components/Cart';
import CheckoutMessage from '../../components/CheckoutMessage';

export default function Home () {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [cartAmount, setCartAmount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [finish, setFinish] = useState(false);

  function selectPokemon (pokemon) {
    const alreadySelected = selectedPokemons.findIndex(item => item.id === pokemon.id);

    if (alreadySelected !== -1) {     
      let selectedPokemon = selectedPokemons[alreadySelected];
      selectedPokemon.amount++;

      const filteredPokemons = selectedPokemons.filter(item => item.id !== pokemon.id);
      setSelectedPokemons([...filteredPokemons, selectedPokemon]);
    } else {
      setSelectedPokemons([ ...selectedPokemons, { ...pokemon, amount: 1 }]);
    }

    setCartAmount(cartAmount + 1);
  }

  function changeAmount (id, diff) {
    let pokemon = selectedPokemons.filter(item => item.id === id)[0];
    pokemon.amount += diff;
    setCartAmount(cartAmount + diff);
    
    const filteredPokemons = selectedPokemons.filter(item => item.id !== pokemon.id);

    if (pokemon.amount > 0)
      setSelectedPokemons([...filteredPokemons, pokemon]);
    else
      setSelectedPokemons(filteredPokemons);
  }

  function checkOut () {
    setFinish(true);
    setSelectedPokemons([]);
    setCartAmount(0);
    setShowCart(false);

    setTimeout(() => {
      setFinish(false);
    }, 2000);
  }

  return(
    <>
      { finish && <CheckoutMessage /> }
      <Header cartAmount={cartAmount} toggleCart={setShowCart} />
      { showCart &&
        <Cart
          pokemons={selectedPokemons}
          changeAmount={changeAmount}
          toggleCart={setShowCart}
          checkOut = {checkOut}
        />
      }
      <PokemonGrid onSelection={selectPokemon} />
    </>
  );
}