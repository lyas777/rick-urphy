import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

const getCharactersRickAndMorty = async (url = API_URL) => {
  const responseCharacters = await axios.get(url);
  const dataCharacters = responseCharacters.data;
  const characters = dataCharacters.results;
  const next = dataCharacters.info.next;
  const prev = dataCharacters.info.prev;

  return { prev, characters, next };
};

export { getCharactersRickAndMorty };
