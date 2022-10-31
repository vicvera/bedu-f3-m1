//Equipo 14

const https = require('https')

function getStarWarsData() {
  https.get('https://swapi.dev/api/people/', (resp) => {
    let data = ''
    resp.setEncoding('utf-8')
    resp.on('data', (chunk) => {
      data += chunk
    })

    resp.on('end', () => {
      try {
        let body = JSON.parse(data)
        //console.log(body);
        let result = body.results;
        result.sort((a, b) => {
            return a.films.length - b.films.length;
            // if(a.films.length <= b.films.length) {
            //     return -1
            // }
            // else {
            //     return 1
            // }
        })
        console.log('__________Orden por peliculas__________');
        for(let item of result) {
            // console.log(item.films.length);
            // console.log(item.name);
            console.log(`Nombre: ${item.name} Peliculas: ${item.films.length}`);
        }
        result.sort((a, b) => {
            if(a.name <= b.name) {
                return 1
            }
            else {
                return -1
            }
        })
        console.log('__________Orden por nombre__________');
        for(let item of result) {
            // console.log(item.films.length);
            // console.log(item.name);
            console.log(`Nombre: ${item.name} Peliculas: ${item.films.length}`);
        }
      } catch (error) {
        console.log(error)
      }
    }).on("Error", (err) => {
      console.log(err.message)
    })
  })
}

getStarWarsData();
