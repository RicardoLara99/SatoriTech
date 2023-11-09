import React, { useContext, useState, useEffect } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import LocationForm from '../../components/LocationForm';
import Modal from '../../components/Modal';
import CharacterCard from '../../components/CharacterCard';
import "./CharacterContainer.css"
const CharacterContainer = () => {
  const { locationData, setLocationId, modalCharacter, setModalCharacter } = useContext(CharacterContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (locationData) {
      // Aquí se harían las solicitudes para obtener los datos de los personajes
      const fetchCharacters = async () => {
        const promises = locationData.residents.slice(0, 5).map(url => fetch(url).then(res => res.json()));
        const charactersData = await Promise.all(promises);
        setCharacters(charactersData);
      };

      fetchCharacters();
    }
  }, [locationData]);

  const setBackgroundClass = (id) => {
    if (id < 50) return 'green';
    if (id > 50 && id < 80) return 'blue';
    if (id > 80) return 'red';
    return '';
  };

  const backgroundClass = locationData ? setBackgroundClass(locationData.id) : '';
  console.log(modalCharacter)
  return (
    <div>
      <LocationForm setLocationId={setLocationId} />
      <div id="characters" className={backgroundClass}>
        {characters.map((character, index) => (
          <CharacterCard key={character.id} character={character} onCharacterSelect={() => setModalCharacter(character)} />
        ))}
      </div>
      {modalCharacter && <Modal character={modalCharacter} onClose={() => setModalCharacter(null)} />}
    </div>
  );
};

export default CharacterContainer;
