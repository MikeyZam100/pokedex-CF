let pokemonRepository = function() {
let pokemonList = [
    {name:'Bulbasaur', height:'0.7 m', type:'grass'}, 
    {name:'Ivysaur', height:'1 m', type:'grass'}, 
    {name:'Venusaur', height:'2 m', type:'grass,' + ' poison'},
    {name:'Charmander', height:'0.6 m,', type:'fire'},
    {name:'Charmeleon', height:'1.1 m', type:'fire'},
    {name:'Charizard', height:'1.7 m', type:'fire'},
    {name:'Squirtle', height:'0.5 m', type:'water'},
    {name:'Wartortle', height:'1 m', type:'water'},
    {name:'Blastoise', height:'1.6 m', type:'water'},
];

// Display the items onto the page
pokemonList.forEach(function(pokemon) {
    document.write(pokemon.name + ': ' + pokemon.height + ', ' + pokemon.type);
  
    // Extract the height value without the ' m' suffix
    let heightValue = pokemon.height.slice(0, -2);
  
    // Check if the height is above 1 meter
    if (parseFloat(heightValue) > 1) {
      document.write(' - Wow, that\'s a big Pokémon!');
    }
  
    document.write('<br>');
  });
};

pokemonRepository()