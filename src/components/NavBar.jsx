function NavBar({ setPokemonIndex, pokemonList }) {
  const handleClick = (index) => {
    setPokemonIndex(index);
    pokemonList[index].name === "pikachu" ? alert("pika pikachu !!!") : "";
  };
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleClick(index)} key={pokemon.name}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default NavBar;
