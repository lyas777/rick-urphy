import { useEffect, useState } from 'react';
import { getCharactersRickAndMorty } from '../../services/RickAndMortyService';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HomeLoader from '../../components/Loader/HomeLoader';

const Home = () => {
  const [loadCharacters, setLoadCharacters] = useState({
    loading: true,
    prev: null,
    characters: undefined,
    next: null,
  });

  const getCharacters = async (url) => {
    setLoadCharacters({
      loading: true,
    });
    const { prev, characters, next } = await getCharactersRickAndMorty(url);
    setLoadCharacters({
      loading: false,
      prev: prev,
      characters: characters,
      next: next,
    });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Home</h1>
      </div>
      {loadCharacters.loading ? (
        <HomeLoader />
      ) : (
        <>
          <div className="row">
            <div className="col mb-3">
              <button
                className="btn btn-primary float-start"
                type="button"
                style={{ marginLeft: '-10px' }}
                disabled={loadCharacters.prev === null}
                onClick={() => getCharacters(loadCharacters.prev)}
              >
                <FaChevronLeft />
              </button>
              <button
                className="btn btn-primary float-end"
                type="button"
                disabled={loadCharacters.next === null}
                onClick={() => getCharacters(loadCharacters.next)}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="row row-cols-md-2">
            {loadCharacters.characters.map((character) => {
              return (
                <div
                  key={character.id}
                  className="card mb-3"
                  style={{ marginRight: '10px', width: '540px' }}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <img
                        style={{ marginLeft: '-12px' }}
                        src={character.image}
                        alt="character"
                        className="bd-placeholder-img"
                        height="200"
                        width="200"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">
                          {character.species}
                          <br />
                          {character.gender}
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            {character.origin?.name}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
