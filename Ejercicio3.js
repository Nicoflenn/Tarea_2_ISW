//Operadores de Asignación y Comparación
//Dado los siguientes valores numéricos:
const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

//1. Muestre por consola si el numero1 es mayor o igual que numero2.
if (numero1>= numero2) {
    console.log("El Numero 1 es mayor o igual que el Numero 2");
}else {
    console.log("El Numero 1 NO es mayor ni igual que el Numero 2");
}

//2. Muestre por consola si el numero1 es menor o igual que numero2.
if (numero1 <= numero2) {
    console.log("El numero 1 es menor o igual que el numero 2.");
} else {
    console.log("El numero 1 no es menor ni igual que el numero 2.");
}

//3. Muestre por consola si el numero1 es menor que numero3.

if (numero1 < numero3) {
    console.log("El numero 1 es menor que numero 3.");
} else {
    console.log("El numero 1 es mayor que numero 3.");
}

//4. Muestre por consola si el numero3 es menor que numero2
if (numero2 > numero3) {
    console.log("El numero 3 es menor que numero 2.");
} else {
    console.log("El numero 3 es mayor que numero 2.");
}
//5. Muestre por consola si el numero3 es estrictamente diferente que numero1.
if (numero3 !== numero1) {
    console.log("El numero 3 es estrictamente diferente de numero 1.");
}else{
    console.log("El numero 3 es estrictamente igual de numero 1.");
}

//6. Muestre por consola si el numero1 es estrictamente igual al numero2.
if (numero1 == numero2) {
    console.log("El numero 3 es estrictamente diferente de numero 1.");
}else{
    console.log("El numero 1 es estrictamente igual al numero 2.")
}