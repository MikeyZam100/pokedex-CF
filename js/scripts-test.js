let pokemonRepository = (function() {
  let pokemonList = [];

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Function to get the complete list of Pokémon from the external API
  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  // Function to load the details of a specific Pokémon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Assigning additional details to the Pokémon object
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  // Function to get all pokemon in pokemonList array
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // Function to get all pokemon in pokemonList array
  function getAll() {
    return pokemonList;
  }

  //Function to show details of a pokemon
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
  }

  // Function to add pokemon to the html page
  function addListItem(pokemon) {
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');

    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');

    button.addEventListener('click', function() {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  
  //returns functions and data
  return {
    loadList: loadList,
    loadDetails: loadDetails,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
  
});