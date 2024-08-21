// Función que separa las palabras en dos categorías: pares e impares
function separarPorPares(array) {

    // Inicializamos 2 arrays vacíos p/ almacenar longitud de las palabras
    let resultado = {
        pares: [],
        impares: []
    };

    // Iteramos sobre cada palabra del array
    for (let i = 0; i < array.length; i++) {
        // Guardamos la palabra actual iterada en una variable
        let palabra = array[i];
        
        // Verificamos si: longitud es par
        if (palabra.length % 2 === 0) {
            resultado.pares.push(palabra);

        } else {
            // Si es impar: va a array de impares
            resultado.impares.push(palabra);
        }
    }

    // Devolvemos el objeto con palabras separadas
    return resultado;
}

// Array (palabras que quiero separar)
let palabras = ['Auto', 'Parlante', 'Moto', 'Sal', 'Perfume', 'estrella', 'Sol', 'Nubes'];

const resultado = separarPorPares(palabras);

console.log(resultado);

// La estructura esperada del resultado es:
// resultado = {
//     pares: ['Auto', 'Moto', 'Perfume', 'Sol'],
//     impares: ['Parlante', 'Sal', 'estrella', 'Nubes'] OK 
// }
