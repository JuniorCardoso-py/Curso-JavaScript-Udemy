let contador = 1;
contador++;
console.log(contador)


let contador2 = 1;
++contador2;
console.log(contador)

console.log()

console.log(contador++) // aqui ele tem o valor de 3
console.log(++contador) // aqui é 3 + 1

console.log()

console.log(contador--) // aqui ele tem o valor de 3
console.log(--contador) // aqui é 3 - 1

console.log()

const passo = 2;
let contador3 = 1;
contador3 = contador3 + passo;
console.log(contador3)
contador3 = contador3 + passo;
console.log(contador3)
contador3 = contador3 + passo;
console.log(contador3)

// Oooouu ainda

const step = 20;
let count = 1;
count += step;  // 21
count += step;  // 41
count += step;  // 61

console.log(count)

console.log()

const step1 = 2;
let count1 = 1;
count1 *= step1;  // count1 = 1 * 2  --- count1 == 2
count1 *= step1;  // count1 = 2 * 2   --- count1 == 4
count1 *= step1;  // count1 = 4 * 2   --- count1 == 8

console.log(count1)