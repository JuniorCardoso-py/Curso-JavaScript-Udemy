/*
    Primitivos (imutaveis) - string, number, boolean, undefined
    null (bigint, symbol) - Valores Copiados

    Referncia (mutavel) - array, object, function
    Passados Por Referencia
 */

let nome = 'Junior';
nome = 'Cardoso';
nome[0] = 'H' /* Imutavel */
console.log(nome[0], nome);

let a = 'A';
let b = a; // aqui é uma copia de a

console.log(a,b);

a = 'Outra Coisa';
console.log(a, b);


a = [1,2,3];
b = a; /* Aqui já não é mais uma copia e sim um apontamento para o mesmo local
        da memoria*/

console.log(a, b)

a.push(4)
console.log(a)
console.log(b)

b.pop();
console.log(b)
console.log(a)


a = [1,2,3];
b = a;
let c = b;

a.push(4)
console.log(a,b,c)

a = [1,2,3];
b = [...a]; // Dessa maneira b é copia do valor original de a e não existe mais
            // ligação entre os dois

console.log(a,b)

a.push(4)
console.log(`Valor de A: ${a}, Valor de B: ${b}`);
