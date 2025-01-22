import pokemons from "./pokemons.js";
const pokemonContainer = document.getElementById("huu");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Generator function to display pokemon cards
function generator(pokemons) {
    pokemonContainer.innerHTML = "";  // Avvalgi kartalarni tozalash
    pokemons.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");
        card.innerHTML = `
            <div class="header">
                <h2 class="bull">${pokemon.name}</h2>
                <div class="id-badge">${pokemon.id}</div>
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" class="pokemon-image">
            <div class="type">${pokemon.type.join(" ")}</div>
            <div class="details">
                <p>Candy count: ${pokemon.candy}</p>
                <p>${pokemon.weight}</p>
            </div>
            <div class="weaknesses">
                <p>${pokemon.weaknesses.join(", ")}</p>
            </div>
            <div class="footer">
                <span>${pokemon.time}</span>
            </div>
        `;
        pokemonContainer.appendChild(card);
    });
}

// Initial rendering of all pokemon
generator(pokemons);

// Search function to filter pokemon by name
function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedType = filterType.value;

    // Filter pokemons by name
    const filterPokemons = pokemons.filter(pokemon => {
        const pokemonName = pokemon.name.toLowerCase();
        return pokemonName.includes(searchValue);
    });

    // Clear existing pokemon cards
    pokemonContainer.innerHTML = '';

    // Render filtered pokemons
    if (filterPokemons.length > 0) {
        filterPokemons.forEach(pokemon => {
            const card = document.createElement("div");
            card.classList.add("pokemon-card");
            card.innerHTML = `
            <div class="header">
                <h2 class="bull">${pokemon.name}</h2>
                <div class="id-badge">${pokemon.id}</div>
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" class="pokemon-image">
            <div class="type">${pokemon.type.join(" ")}</div>
            <div class="details">
                <p>Candy count: ${pokemon.candy}</p>
                <p>${pokemon.weight}</p>
            </div>
            <div class="weaknesses">
                <p>${pokemon.weaknesses.join(", ")}</p>
            </div>
            <div class="footer">
                <span>${pokemon.time}</span>
            </div>
        `;
            pokemonContainer.appendChild(card);
        });
    } else {
        // If no results found
        const noResultMessage = document.createElement("p");
        noResultMessage.textContent = "No results found!";
        pokemonContainer.appendChild(noResultMessage);
    }
}

// Event listeners for search button and input
searchButton.addEventListener('click', searchProduct);
searchInput.addEventListener('keyup', searchProduct);



