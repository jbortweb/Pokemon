import axios from 'axios';

//Llamamos a la api de pokemon
export async function getPokemons() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=12`;
  const response = await axios.get(url);
  const results = response.data.results;

  // Obtenemos los detalles de cada pokemon

  const pokemons = await Promise.all(
    results.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      const data = res.data;

      const id = data.id;
      const name = data.name;
      const image = data.sprites.front_default;
      const attack = data.stats.find(stat => stat.stat.name === 'attack').base_stat;
      const defense = data.stats.find(stat => stat.stat.name === 'defense').base_stat;
      const types = data.types.map(type => type.type.name);
      return { id, name, image, attack, defense, types };
    })
  );
  return pokemons;
}

// Obtenemos un pokemon por su ID

export const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await axios.get(url);
  const data = response.data;

  const types = data.types.map(type => type.type.name);
  const pokemon = {
    id: data.id,
    name: data.name,
    image: data.sprites.front_default,
    attack: data.stats.find(stat => stat.stat.name === 'attack').base_stat,
    defense: data.stats.find(stat => stat.stat.name === 'defense').base_stat,
    types,
  };

  return pokemon;
}
