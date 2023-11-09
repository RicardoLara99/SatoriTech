document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('locationForm');
    form.addEventListener('submit', fetchLocationData);
  });
  
  function fetchLocationData(e) {
    e.preventDefault();
    const locationId = document.getElementById('locationId').value;
    fetch(`php/api.php?locationId=${locationId}`)
      .then(response => response.json())
      .then(updatePageContent)
      .catch(handleError);
  }
  
  function updatePageContent(location) {
    setBackground(location.id);
    const residentsPromises = location.residents.slice(0, 5).map(url => 
      fetch(url).then(resp => resp.json())
    );
    Promise.all(residentsPromises)
      .then(characters => characters.sort((a, b) => a.name.localeCompare(b.name)))
      .then(displayCharacters)
      .catch(handleError);
  }
  
  function setBackground(locationId) {
    const charactersContainer = document.getElementById('characters');
    charactersContainer.className = locationId < 50 ? 'green' : locationId > 50 && locationId < 80 ? 'blue' :locationId > 80 && 'red';
  }
  
  function displayCharacters(characters) {
    const charactersContainer = document.getElementById('characters');
    charactersContainer.innerHTML = ''; // Clear previous results
    characters.forEach(character => {
      fetchCharacterEpisodes(character).then(characterEpisodes => {
        const characterElement = document.createElement('div');
        characterElement.innerHTML = `
          <div class="detailsContainer_div">
            <div>
              <img src="${character.image}" alt="${character.name}" class="character" />
            </div> 
            <div>
              <h3>${character.name}</h3>
              <p>Status: ${character.status}</p>
              <p>Species: ${character.species}</p>
              <p>Origin: ${character.origin.name}</p>
            </div>
          </div>   
          <p>
            ${characterEpisodes&&characterEpisodes.length ? 'Episodes':' '}
          </p>
          <ul>
            ${characterEpisodes.slice(0, 3).sort((a, b) => a.name.localeCompare(b.name)).map(ep => `<li><a href="${ep.url}" target="_blank">${ep.name}</a></li>`).join('')}
          </ul>
        `;
        characterElement.querySelector('img').addEventListener('click', () => openModal(character, characterEpisodes));
        charactersContainer.appendChild(characterElement);
      }).catch(handleError);
    });
  }
  
  function fetchCharacterEpisodes(character) {
    const episodePromises = character.episode.map(url =>
      fetch(url).then(resp => resp.json())
    );
    return Promise.all(episodePromises);
  }
  
  function openModal(character, episodes) {
    const modal = document.getElementById('myModal');
    const modalText = document.getElementById('modalText');
    modalText.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}" />
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Type: ${character.type}</p>
      <p>Gender: ${character.gender}</p>
      <p>Location: ${character.location.name}</p>
      <p>
        ${episodes&&episodes.length ? 'Episodes':' '}
      </p>
      <ul>
        ${episodes.map(ep => `<li><a href="${ep.url}" target="_blank">${ep.name}</a></li>`).join('')}
      </ul>
    `;
    modal.style.display = 'block';
  }
  
  function handleError(error) {
    console.error('Fetch error:', error);
  }
  
  const modal = document.getElementById('myModal');
  
  const span = document.getElementsByClassName("close")[0];
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  