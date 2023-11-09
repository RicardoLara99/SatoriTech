import React from 'react';
import { CharacterProvider } from './context/CharacterProvider';
import CharacterContainer from './containers/CharacterContainer';
import "./App.css"
const App = () => {
  return (
    <CharacterProvider>
      <CharacterContainer />
    </CharacterProvider>
  );
};

export default App;
