/*
Escribe una función llamada `numDuplicados` que reciba un string y retorne el número de caracteres que aparecen más de una vez.
*/

function numDuplicados(palabra){

    let map = {}
    let contador = 0

    for (let i of palabra){
        if (i in map){
            map[i] ++
        }else{
            map[i] = 0
        }
    }

    for (let j in map){
        if (map[j] > 0){
            contador ++
        }
    }
    return contador

}


console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0 