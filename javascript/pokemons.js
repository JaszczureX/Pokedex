const Pokemons = [
  {
    Id: 1,
    name: "Bulbasaur",
    type: "Grass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    tag: "001",
    bgColor: "green",
  },
  {
    Id: 2,
    name: "Ivysaur",
    type: "Grass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    tag: "002",
    bgColor: "green",
  },
  {
    Id: 3,
    name: "Venusaur",
    type: "Grass",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    tag: "003",
    bgColor: "green",
  },
  {
    Id: 4,
    name: "Charmander",
    type: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    tag: "004",
    bgColor: "red",
  },
  {
    Id: 5,
    name: "Charmeleon",
    type: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    tag: "005",
    bgColor: "red",
  },
  {
    Id: 6,
    name: "Charizard",
    type: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    tag: "006",
    bgColor: "red",
  },
  {
    Id: 7,
    name: "Squirtle",
    type: "Water",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.pngl",
    tag: "007",
    bgColor: "blue",
  },
  {
    Id: 8,
    name: "	Wartortle",
    type: "Water",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    tag: "008",
    bgColor: "blue",
  },
  {
    Id: 9,
    name: "Blastoise",
    type: "Water",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    tag: "009",
    bgColor: "blue",
  },
  {
    Id: 10,
    name: "Caterpie",
    type: "Bug",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    tag: "010",
    bgColor: "darkgreen",
  },
  {
    Id: 11,
    name: "Metapod",
    type: "Bug",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    tag: "011",
    bgColor: "darkgreen",
  },
  {
    Id: 12,
    name: "Butterfree",
    type: "Bug",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    tag: "012",
    bgColor: "darkgreen",
  },
  {
    Id: 13,
    name: "Weedle",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    tag: "013",
    bgColor: "purple",
  },
  {
    Id: 14,
    name: "Kakuna",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    tag: "014",
    bgColor: "purple",
  },
  {
    Id: 15,
    name: "Beedrill",
    type: "Bug/Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    tag: "015",
    bgColor: "purple",
  },
  {
    Id: 16,
    name: "Pidgey",
    type: "Normal/Flying",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    tag: "016",
    bgColor: "gray",
  },
  {
    Id: 17,
    name: "Pidgeotto",
    type: "Normal/Flying",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    tag: "017",
    bgColor: "gray",
  },
  {
    Id: 18,
    name: "Pidgeot",
    type: "Normal/Flying",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    tag: "018",
    bgColor: "gray",
  },
  {
    Id: 19,
    name: "Rattata",
    type: "Normal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    tag: "019",
    bgColor: "gray",
  },
  {
    Id: 20,
    name: "Raticate",
    type: "Normal",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    tag: "020",
    bgColor: "gray",
  },
  {
    Id: 21,
    name: "Spearow",
    type: "Normal/Flying",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    tag: "021",
    bgColor: "gray",
  },
  {
    Id: 22,
    name: "Fearow",
    type: "Normal/Flying",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    tag: "022",
    bgColor: "gray",
  },
  {
    Id: 23,
    name: "Ekans",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    tag: "023",
    bgColor: "purple",
  },
  {
    Id: 24,
    name: "Arbok",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    tag: "024",
    bgColor: "purple",
  },
  {
    Id: 25,
    name: "Pikachu",
    type: "Electric",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    tag: "025",
    bgColor: "yellow",
  },
  {
    Id: 26,
    name: "Raichu",
    type: "Electric",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    tag: "026",
    bgColor: "yellow",
  },
  {
    Id: 27,
    name: "Sandshrew",
    type: "Ground",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    tag: "027",
    bgColor: "brown",
  },
  {
    Id: 28,
    name: "Sandslash",
    type: "Ground",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    tag: "028",
    bgColor: "brown",
  },
  {
    Id: 29,
    name: "Nidoran♀",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    tag: "029",
    bgColor: "purple",
  },
  {
    Id: 30,
    name: "Nidorina",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    tag: "030",
    bgColor: "purple",
  },
  {
    Id: 31,
    name: "Nidoqueen",
    type: "Poison/Ground",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    tag: "031",
    bgColor: "purple",
  },
  {
    Id: 32,
    name: "Nidoran♂",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    tag: "032",
    bgColor: "purple",
  },
  {
    Id: 33,
    name: "Nidorino",
    type: "Poison",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    tag: "033",
    bgColor: "purple",
  },
  {
    Id: 34,
    name: "Nidoking",
    type: "Poison/Ground",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    tag: "034",
    bgColor: "purple",
  },
  {
    Id: 35,
    name: "Clefairy",
    type: "Fairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    tag: "035",
    bgColor: "pink",
  },
  {
    Id: 36,
    name: "Clefable",
    type: "Fairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    tag: "036",
    bgColor: "pink",
  },
  {
    Id: 37,
    name: "Vulpix",
    type: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    tag: "037",
    bgColor: "red",
  },
  {
    Id: 38,
    name: "Ninetales",
    type: "Fire",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    tag: "038",
    bgColor: "red",
  },
  {
    Id: 39,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    tag: "039",
    bgColor: "pink",
  },
  {
    Id: 40,
    name: "Wigglytuff",
    type: "Normal/Fairy",
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    tag: "040",
    bgColor: "pink",
  },
];
