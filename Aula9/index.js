// Tipos Primitivos
//  string, number, undefined, null, boolean, symbol


const nome = 'Junior';
const nome1 = "Junior";
const nome2 = `Junior`;


const num1 = 10; // number
const  num2 = 1.124; // number

let nomeAluno; //nome do valor que essa variavel recebe undefined
// não aponta para nenhum lugar na memoria

let sobrenomeAluno = null; // Nulo tambem não aponta para lugar nenhum da memoria
// mas não é igual ao undefined

const boolean = true;
const boolean2 = false;

console.log(typeof num2);
console.log(typeof nome, nome);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof boolean2, boolean2);

const array = [1, 2];
const b = array;

console.log(array, b);

b.push(3);
console.log(array, b)