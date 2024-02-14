/*
Crear un programa que pida al usuario ingresar una palabra y como resultado debe separar las letras, caracteres y números.
*/

function clasificador(cadena) {
  // Expresión regular que busca todas las letras (mayúsculas y minúsculas)
  let regExLetras = /[a-zA-Z]/g;

  // Expresión regular que busca todos los números
  let regExNumeros = /[0-9]/g;

  // Expresión regular que busca todos los símbolos (cualquier carácter que no sea letra ni número)
  let reExSimbolos = /[^a-zA-Z0-9]/g;

  let letras = cadena.match(regExLetras);
  let numeros = cadena.match(regExNumeros);
  let simbolos = cadena.match(reExSimbolos);

  console.log("Caracteres: ", letras);
  console.log("Números: ", numeros);
  console.log("Símbolos: ", simbolos);

  return [letras, numeros, simbolos];
}

let cadena = "¡Hola 1234!";
clasificador(cadena);

// Salida esperada:
// Caracteres: [ 'H', 'o', 'l', 'a' ]
// Números:    [ '1', '2', '3', '4' ]
// Símbolos:   [ '¡', ' ', '!' ]
