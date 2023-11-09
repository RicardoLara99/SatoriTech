import React, { useState } from 'react';
import { CharacterContext } from './CharacterContext';
import useApi from '../hooks/useApi';

export const CharacterProvider = ({ children }) => {
  const [locationId, setLocationId] = useState('');
  const { data: locationData, error: locationError, loading: locationLoading } = useApi(locationId ? `https://rickandmortyapi.com/api/location/${locationId}` : null);
  const [modalCharacter, setModalCharacter] = useState(null);
  const [modalEpisodes, setModalEpisodes] = useState([]);
  console.log(locationData)
  const value = {
    locationData,
    locationError,
    locationLoading,
    setLocationId,
    modalCharacter,
    setModalCharacter,
    modalEpisodes,
    setModalEpisodes,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};
