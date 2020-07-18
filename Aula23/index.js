/*

 Operadores de comparaçâo


>   maior que
>=  maior ou igual a
<   menor que
<=  menor ou igual a
==  igualdade (valor) ********* Não recomendavel
=== igualdade estrita (valor e tipo)
!=  diferente (valor) ********* Não recomendavel
!== diferente estrito (valor e tipo)

 */
console.log(10 > 5);

const comparacao = 10 > 5;

console.log(comparacao);

const comparacao2 = 10 >= 11;
console.log(comparacao2)

let num1 = 10;
let num2 = '10';
console.log(num1 == num2); // Aqui vai dar true por isso não é recomendado
// utilzar esse sinal de comparação.

num1 = 10;
num2 = 10;
console.log(num1 === num2)

num1 = 10;
num2 = '10;'
console.log(num1 === num2)