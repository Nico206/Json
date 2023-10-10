const needle = require('needle')

const url = 'https://pokeapi.co/api/v2/pokemon'

needle('get', url,  {json:true})
    .then((respuesta)=>{
        let pokemones = respuesta.body.results
        pokemones.forEach(pokemon => {
            console.log(pokemon.name)
            console.log('---------')
        });
    })
    .catch((error)=>{
        console.log(error)
    })