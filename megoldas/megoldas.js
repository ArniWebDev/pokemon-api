const dataApi = {
	apiUrl: "https://pokeapi.co/api/v2/",
	endpoint: "pokemon/",
};

const randomPokemon = document.querySelector(".random-pokemon");

const pokeball = document.querySelector(".pokeball");

const generateRandomNuber = () => Math.floor(Math.random() * 200) + 1;

const generateRandomPokemon = () => {
	const url = dataApi.apiUrl + dataApi.endpoint + generateRandomNuber();
	fetch(url)
		.then((data) => data.json())
		.then((pokemon) =>
			displayPokemon(pokemon.name, pokemon.sprites.front_default)
		)
		.catch((err) => {
			console.error(err);
		});
};

const displayPokemon = (name, img) => {
	const html = `
    <h2>${name}</h2>
    <img class="pokemon" src="${img}" alt="${name}">
  `;
	randomPokemon.innerHTML = html;
};

pokeball.addEventListener("click", generateRandomPokemon);

generateRandomPokemon();
