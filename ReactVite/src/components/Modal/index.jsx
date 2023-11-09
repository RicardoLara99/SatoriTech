import React from 'react';
import styles from './Modal.module.css';
import useApi from '../../hooks/useApi';

const Modal = ({ character, onClose }) => {
  if (!character) return null;
  const episodes = character.episode.map(endpoint => useApi(endpoint));
  const allEpisodesLoaded = episodes.every(ep => ep.data && !ep.loading);

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
        <p>Type: ${character.type}</p>
        <p>Gender: ${character.gender}</p>
        <p>Location: ${character.location.name}</p>
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
    </div>
  );
};

export default Modal;
