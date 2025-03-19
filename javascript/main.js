const PokemonList = Pokemons;

const tableLength = PokemonList.length;
const container = document.getElementById("container");

const creatingCards = () => {
  for (let i = 0; i < tableLength; i++) {
    //console.log(PokemonList[i]);
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
      <img src="${PokemonList[i].img}">
      <span class="tag-pokemon">#${PokemonList[i].tag}</span>
      <span class="name-pokemon">${PokemonList[i].name}</span>
      <span class="type-pokemon">type: ${PokemonList[i].type}</span>
    `;
    newDiv.className = `${PokemonList[i].bgColor} card`;
    container.appendChild(newDiv);
  }
};

const App = () => {
  creatingCards();
};

window.onload = App;
