function validador(string)
{
  let regExLetras = /[a-zA-Z]/g;
  let regExNumeros = /[0-9]/g;
  let reExSimbolos = /[^a-zA-Z0-9]/g;

  let letras = cadena.match(regExLetras);
  let numeros = cadena.match(regExNumeros);
  let simbolos = cadena.match(reExSimbolos);

  return [letras, numeros, simbolos];
}

let cadena = "MarcosD59.net";

console.log(validador(cadena));