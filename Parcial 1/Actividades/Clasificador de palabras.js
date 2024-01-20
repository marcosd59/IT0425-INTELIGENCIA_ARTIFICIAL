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

  return [letras, numeros, simbolos];
}

let cadena = "¡Hola!, Marcosd59.";
console.log(clasificador(cadena));

// salida: [ [ 'H', 'o', 'l', 'a', 'M', 'a', 'r', 'c', 'o', 's', 'd' ], [ '5', '9' ], [ '¡', '!', ',', ' ', '.' ] ]