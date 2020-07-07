import React, { useState } from 'react';

import './styles.css';

import PokemonCard from '../PokemonCard';

export default function PokemonGrid ({ onSelection }) {
  const [pages, setPages] = useState(1);

  return(
    <div className="container">
      {
        Array.from(new Array(pages * 5), (x, i) => i + 1)
          .map(id => <PokemonCard key={id} id={id} onSelection={onSelection} />)
      }
      <button onClick={() => setPages(pages + 1)}>Carregar mais pokémons</button>
    </div>
  );
}