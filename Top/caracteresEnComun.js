/*
Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. 
La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.
*/

function caracteresEnComun(str1,str2){

    let lista = []

    for (i of str1){
        for (j of str2){
            if (i == j){
                if (lista.includes(i)){
                    continue
                }else{
                    lista.push(i)
                }
            }
        }
    }

    return lista
}


console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
console.log(caracteresEnComun("Hola", "Bye")); // []