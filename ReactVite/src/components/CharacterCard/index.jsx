import React from 'react';
import styles from './CharacterCard.module.css';
import useApi from '../../hooks/useApi';

const CharacterCard = ({ character, onCharacterSelect }) => {
  // Utiliza el custom hook para cada URL de episodio, asumiendo que character.episode es un array de URLs
  const episodeEndpoints = character.episode.slice(0, 3);
  const episodes = episodeEndpoints.map(endpoint => useApi(endpoint));

  // Verifica si todos los episodios han sido cargados
  const allEpisodesLoaded = episodes.every(ep => ep.data && !ep.loading);

  if (!character) return null;

  return (
    <div className={styles.card} >
      <div className={styles.detailsContainerDiv}>
        <div>
          <img src={character.image} alt={character.name} className={styles.image} onClick={() => onCharacterSelect()}/>
        </div>
        <div>
        <h3 className={styles.characterH3}>{character.name}</h3>
          <p className={styles.characterP}>Status: {character.status}</p>
          <p className={styles.characterP}>Species: {character.species}</p>
          <p className={styles.characterP}>Origin: {character.origin.name}</p>
        </div>
      </div>
      
      
      {allEpisodesLoaded && episodes && episodes.length &&(
        <>
        <p>Episodes</p>
        <ul>
          {episodes.map((episode, index) => (
            <li key={index}>
              {episode.data && (
                <a href={episode.data.url} target="_blank" rel="noopener noreferrer">
                  {episode.data.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        </>
      )}
    </div>
  );
};

export default CharacterCard;
