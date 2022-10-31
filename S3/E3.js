const https = require('https');

// Ejemplo 03
function obtenerPokemon(pokemon) {
    return new Promise((resolve, reject) => {
      https
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, (resp) => {
          let datos = "";
  
          resp.on("data", (chunk) => {
            datos += chunk;
          });
  
          resp.on("end", () => {
            try {
              datos = JSON.parse(datos)
              resolve(datos)
            } catch (error) {
              reject(error)
            }
          });
        })
        .on("error", (err) => {
          reject(err.message);
        });
    });
  }
  
  const pokemones = [
    "squirtle",
    "pidgey",
    "pikachu",
    "rattata",
    "alakazam",
    "onix",
    "mew",
    "wigglytuff",
  ];
  
  async function atraparPokemones(pokemones) {
    try {
      let resultados = await Promise.all(
        pokemones.map(async (pokemon) => {
          let resultado = await obtenerPokemon(pokemon);
          console.log(`Pokemon atrapado ${pokemon}`);
          return resultado;
        })
      );
      return resultados
    } catch (error) {
      console.error("Error", error);
    }
  }
  
  atraparPokemones(pokemones)
    .then(data => console.log(data.length))
    .catch(error => console.log(error))