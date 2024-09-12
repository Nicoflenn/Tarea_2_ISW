//Arrays

//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
let arr1 = [1, 5, 10, 15, 20];
let sum = arr1.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);
//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
const numeros = [10, 20, 30, 40, 50];
function calcularPromedio(nums) {
  if (nums.length === 0) {
      return null;
  }

  let total = 0;
  
  for (let i = 0; i < nums.length; i++) {
      total += nums[i];
  }

  return total / nums.length;
}

const promedio = calcularPromedio(numeros);
console.log('El promedio es: ' + promedio);

//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function convertirAMayusculas(arrayDeStrings) {
    return arrayDeStrings.map(str => str.toUpperCase());
}

const cadenas = ["benjaYKPZ", "come", "pito"];
const resultado2 = convertirAMayusculas(cadenas);
console.log( resultado2);

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
let arr2 = [1, 2, 3, 4, 5];
let filteredArr = arr2.filter(function(element) {
  return element % 2 === 0;
});

console.log(filteredArr);