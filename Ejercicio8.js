//Objetos

//1. Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. 
//Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: "Nicoflenn",
    edad: 21,
    genero: "Masculino",
}
console.log(persona);

//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado 
//si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: "Torre",
    lapices: 7,
    papel: "29 papeles",
    esta_bueno: true
}
console.log(caja);
console.log(caja.cuadernos);
console.log(caja.lapices);
console.log(caja.papel);
console.log(caja.esta_bueno);
console.log(typeof caja);
console.log(typeof caja.cuadernos);
console.log(typeof caja.lapices);
console.log(typeof caja.papel);
console.log(typeof caja.esta_bueno);