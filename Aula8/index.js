

const nome = 'Junior';
const sobrenome = 'Cardoso';
const idade = 24;
const  peso = 70;
const altura = 1.70;
let imc;
let anNascimento;

console.log(nome, sobrenome,'tem', idade,'anos, pesa', peso,'kg e tem', altura,'de altura e seu IMC é de',imc=peso /(altura*altura),'e nasceu em', anNascimento=2020-idade);

console.log()
// templates strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`e tem ${altura} de altura e seu IMC é de ${imc=peso /(altura*altura)}` );
console.log(`e nasceu em ${anNascimento=2020-idade}`);