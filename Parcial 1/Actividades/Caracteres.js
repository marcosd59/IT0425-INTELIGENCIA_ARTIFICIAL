function validador(string)
{
	var expresionRegular = /[0-9]/g;

	let ascii = [];
	let palabras = [];
	let simbolos = [];
	let numeros = [];

	for(let i = 0; i < string.length; i++)
	{
		ascii.push(string.charCodeAt(i));
	}

	return ascii;
}

var expresionRegular1 = /[0-9]/g;
var expresionRegular2= /[a-zA-Z]/g;
var expresionRegular3 = /[^a-zA-Z0-9]/g;

var cadena = "Marcosd59";
var numerosEncontrados = cadena.match(expresionRegular1);
var letrasEncontrados = cadena.match(expresionRegular2);

console.log(numerosEncontrados, letrasEncontrados);