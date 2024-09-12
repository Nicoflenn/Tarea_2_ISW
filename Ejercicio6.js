//Funciones
const Palabra = "Sus";
const numero1 = 18;
const numero2 = 4;

//1. Crea una función que reciba un string y retorne el string en mayúsculas.
console.log(Palabra.toUpperCase());

//2. Crea una función que reciba un string y retorne el string en minúsculas.
console.log(Palabra.toLowerCase());

//3. Crear una función que reciba como parámetro 2 números y los reste.
function restar(numero1, numero2) {
    return numero1 - numero2;
}
console.log("La resta es: ", restar(numero1, numero2));

//4. Crear una función que reciba como parámetro 2 números y los divida.
function dividir(numero1, numero2) {
    return numero1 / numero2;
}
console.log("La division es: ", dividir(numero1, numero2));

//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
console.log("La multiplicacion es: ", multiplicar(numero1, numero2));

//6. Crear una función que reciba un string y devuelva la longitud del string.
console.log(Palabra.length);