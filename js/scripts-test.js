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
  
    function displayPokemon(pokemon) {
      console.log(pokemon.name + ': ' + pokemon.height + ', ' + pokemon.type);
  
      let heightValue = pokemon.height.slice(0, -2);
    
      if (parseFloat(heightValue) > 1) {
        console.log(' - Wow, that\'s a big Pokémon!');
      }
    }
  
    return {
      getAll: getAll,
      add: add,
      displayPokemon: displayPokemon
    };
  })();
  
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.displayPokemon(pokemon);
  });