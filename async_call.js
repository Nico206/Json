//Depedencias para hacer una request
//En modo callback
//Tipos de dependencias en js
//- commonsjs: require
//- module: import

const request = require('request')

//url de conexion a la api de rest (dinosaurios)
const url = `https://rickandmortyapi.com/api/character`

// Transaccion asincrona: Conexion 
let r = request(url, 
                {json:true },
                (error, respuesta, body )=>{
                    if(error){
                        console.log(error)
                    }else{
                        let personajes = body.results
                        personajes.forEach((personaje)=>{
                        console.log(personaje.name)
                        console.log("-------")
                        });
                    }
                    
                })