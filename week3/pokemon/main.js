async function findPokemon(event) {
  event.preventDefault();

  const id = document.getElementById('poke-id-input').value;
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
  const pokemon = await resp.json();

  const pokemonNameElement = document.getElementById('pokemon-name');
  pokemonNameElement.innerText = pokemon.name;

  const spriteArr = [];
  for (const spriteKey in pokemon.sprites) {
    // guard operator to only add the sprite to the array if it has a url assocaited with it
    pokemon.sprites[spriteKey] && spriteArr.unshift(pokemon.sprites[spriteKey]);
  }
  
  
  const spriteElements = spriteArr.map(sprite => {
    const spriteElement = document.createElement('div');
    spriteElement.classList = 'col-md-4 col-sm-6 col-xs-12';
    spriteElement.align = 'center';

    const spriteImage = document.createElement('img');
    spriteImage.src = sprite;
    spriteImage.classList = 'img-fluid pokemon-sprite';
    spriteElement.append(spriteImage);

    return spriteElement;
  });

  const pokemonSpritesElement = document.getElementById('pokemon-sprites');
  pokemonSpritesElement.innerHTML = ''; // clear old data
  pokemonSpritesElement.append(...spriteElements);

}