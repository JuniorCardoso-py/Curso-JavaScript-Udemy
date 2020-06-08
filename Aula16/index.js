const conta = Math;

let numero1 = 9.41789;
let numero2 = conta.floor(numero1); // arredonda para baixo
console.log(numero2);

numero2 = conta.ceil(numero1); // arredonda para cima
console.log(numero2);

numero2 = conta.round(numero1) // arredonda para o mais proximo
console.log(numero2)

console.log(Math.max(1,2,3,-500000,123,45,150.2));
console.log(Math.min(1,2,3,-500000,123,45,150.2));
console.log(Math.random()); // gera numeors aleatorios entre 0 e 1

const aleatorio = Math.random();
let aleatorio2 = Math.random();

console.log(aleatorio)
console.log(aleatorio)
console.log(aleatorio2)
console.log(aleatorio2)

const ale = Math.round(Math.random() * (10 -5) +5);
// nessa constante de cima o que acontece é o seguinte
// O Math.random gera um numero aleatorio entre 0 e 1
// para definirmos um numero aleatorio gerado por um numero quisermos
// Podemos fazer dessa forma Math.random() * (10 -5) +5
// nesse caso um numero entre 5 e 10;
// porque 10 - 5 é igual a 5
// logo sera gerado um valor aleatorio que fara a seguinte conta
// 0.52 * 5 que resultara  em 2.6
// a seguinte conta será o valor minimo estipulado 5
// ou seja não importa a multiplicação que dê o valor minimo sempre será 5
//
// Exemplo:
//console.log(0.52 *(10-5) +5);
// console.log(0.52 * 5)
// Exemplo 2:
// const ex2 = Math.random() * (10-5) +5;
// console.log(0.999999999999999 * 5 + 5)
// console.log (4.999999999999995 + 5)
// console.log(9.999999999999995)

console.log(ale)
console.log(Math.PI) // PI
console.log(Math.pow(2,10)); // 2 elevado a 10
console.log(Math.sqrt(100)); // raiz quadrada

// JavaScript Pode dividir numeros por 0

console.log(100/0.000000000001);
console.log(100/0);
console.log(!!(100/0));