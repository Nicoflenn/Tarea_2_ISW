//Operadores Aritméticos
//Dado los siguiente valores numéricos:
const numero1 = 20;
const numero2 = 40;

//1. Suma (+): Suma numero1 y numero2. Muestra el resultado por consola.
function sumar(numero1, numero2) {
    return numero1+numero2;
}
console.log("La suma da: ",sumar(numero1, numero2));

//2. Resta (-): Resta numero1 y numero2. Muestra el resultado por consola.
function resta(numero1, numero2) {
    return numero1-numero2;
}
console.log("La resta da: ",resta(numero1, numero2));

//3. Multiplicación (*): Multiplica numero1 y numero2. Muestra el resultado por consola.
function multipicacion(numero1, numero2) {
    return numero1*numero2;
}
console.log("La multipicacion da: ",multipicacion(numero1, numero2));

//4. División (/): Divide numero1 y numero2. Muestra el resultado por consola.
function dividir(numero1, numero2) {
    return numero1/numero2;
}
console.log("La division da: ",dividir(numero1, numero2));

//5. Modulo (%):  Saca el modulo entre numero2 y numero1. Muestra el resultado por consola.
function modulo(numero1, numero2) {
    return numero2 % numero1;
}
console.log("El modulo da: ",modulo(numero2, numero1));