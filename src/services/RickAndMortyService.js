const API_URL = 'https://rickandmortyapi.com/api/character';
const options = {
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
};

const getCharactersRickAndMorty = async (url = API_URL) => {
  const responseCharacters = await fetch(url, options);
  const dataCharacters = await responseCharacters.json();
  const characters = dataCharacters.results;
  const next = dataCharacters.info.next;
  const prev = dataCharacters.info.prev;

  return { prev, characters, next };
};

export { getCharactersRickAndMorty };
