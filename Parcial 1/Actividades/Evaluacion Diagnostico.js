function validador(cadena) {
  // Expresión regular que busca todas las letras (mayúsculas y minúsculas)
  let regExLetras = /[a-zA-Z]/g;

  // Expresión regular que busca todos los números
  let regExNumeros = /[0-9]/g;

  // Expresión regular que busca todos los símbolos (cualquier carácter que no sea letra ni número)
  let reExSimbolos = /[^a-zA-Z0-9]/g;

  // Utilizando las expresiones regulares para encontrar coincidencias en la cadena
  let letras = cadena.match(regExLetras);
  let numeros = cadena.match(regExNumeros);
  let simbolos = cadena.match(reExSimbolos);

  // Devuelve un array con los resultados de las búsquedas
  return [letras, numeros, simbolos];
}

// Cadena de texto de ejemplo
let cadena = "MarcosD59.net";

// Llamada a la función validador con la cadena de texto y se imprime el resultado en la consola
console.log(validador(cadena));