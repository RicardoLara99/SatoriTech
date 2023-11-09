import React, { useState, useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import styles from "./LocationForm.module.css"
import searchIcon from "../../assets/searchIcon.svg"
const LocationForm = () => {
  const [inputValue, setInputValue] = useState('');
  const { setLocationId } = useContext(CharacterContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocationId(inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.locationForm}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Location ID"
        className={styles.locationInput}
        required
      />
      <button type="submit" className={styles.submitButton}>
        <img alt="buscar" src={searchIcon}/>
      </button>
    </form>
  );
};

export default LocationForm;
