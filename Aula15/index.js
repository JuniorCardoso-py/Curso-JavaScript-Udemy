// Padrão
//      IEE 754-2008
//


let num1 = 1; // number
let num2 = 2.5; // number


console.log(num1.toString() + num2);

// Alterar valor para uma String:
// num1 = num1.toString()

// representação binaria
// console.log(num1.toString(2))

let num3 = 10.578616486
console.log(num3.toFixed(2))

// ver se é instancia de algo
console.log(Number.isInteger(num1))

// IMPRECISAO
let numero1 = 0.7;
let numero2 = 0.1;
console.log(numero1 + numero2)

numero1 = Number(numero1.toFixed(2))
console.log(numero1)