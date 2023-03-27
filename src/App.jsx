import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "./src/assets/imgs/bulbasaur.png",
    },
    {
      name: "mew",
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemonList} />
    </div>
  );
}

export default App;
