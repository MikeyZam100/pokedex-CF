let pokemonRepository = (function() {
  let pokemonList = [
    { name:'Bulbasaur', height:'0.7 m', type:'grass' },
    { name:'Ivysaur', height:'1 m', type:'grass' },
    { name:'Venusaur', height:'2 m', type:'grass, poison' },
    { name:'Charmander', height:'0.6 m', type:'fire' },
    { name:'Charmeleon', height:'1.1 m', type:'fire' },
    { name:'Charizard', height:'1.7 m', type:'fire' },
    { name:'Squirtle', height:'0.5 m', type:'water' },
    { name:'Wartortle', height:'1 m', type:'water' },
    { name:'Blastoise', height:'1.6 m', type:'water' }
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

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

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

document.addEventListener('DOMContentLoaded', function() {
  let pokemonList = pokemonRepository.getAll();
  let pokemonListElement = document.querySelector('.pokemon-list');

  pokemonList.forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);

  });
});