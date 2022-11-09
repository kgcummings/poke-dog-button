function pokeButton(){
   console.log('https://pokeapi.co/api/v2/pokemon/')
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => response.json())
    .then(data => {
        console.log(data);
    let pokemon =
        data.results[Math.floor(Math.random() * data.results.length)].name;
      console.log(pokemon);
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.getElementById('pokebox').src = data.sprites.front_default;
      });
  })}


  function dogButton(){
    fetch(' https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(data => {
      document.getElementById('dogbox').src = data.message;
  });
  };