/*
Escribe una función llamada frecuencias que reciba una cadena de texto 
y retorne un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)
*/

function frecuencias(frase){

    let map = {}

    for (let i of frase){
        if (i === " "){
            continue
        }if ( i in map){
            map[i]++
        }else{
            map[i] = 1
        }
    }

    return map
}

console.log(frecuencias("hola mundo"));
console.log(frecuencias("anita lava la tina"))