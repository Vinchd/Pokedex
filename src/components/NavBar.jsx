function NavBar({ setPokemonIndex, pokemonList }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          onClick={() => {
            setPokemonIndex(index);
          }}
          key={pokemon.name}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
