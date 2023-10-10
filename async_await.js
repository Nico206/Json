const axios = require('axios')
const url = 'https://pokeapi.co/api/v2/pokemon'

async function leerNarutos() {
    const respuesta = await axios.get(url)
    respuesta.data.characters.forEach(element => {
        console.log(element.name)
        console.log("***********")
    });
}


leerNarutos()