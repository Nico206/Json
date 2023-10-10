const axios = require('axios')
const url = 'https://narutodb.xyz/api/character'

axios.get(url)
    .then((respuesta)=> {
        respuesta.data.results.forEach(element => {
            console.log(element.name)
            console.log("***********")
        });
    })
    .catch((error)=>console.log(error))