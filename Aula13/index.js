let umaString = 'Uma \'String\''; // barra invertida escapa as aspas
console.log(umaString);

umaString = 'Uma \tString'; // \t da um tab
console.log(umaString);

console.log(umaString[0]);
// console.log(umaString[-1]); assim da erro
// console.log(umaString[20]); assim tambem
console.log(umaString.charAt(5));
console.log(umaString.charAt(20)); //assim retorna vazio

console.log(umaString.indexOf('Uma'))
console.log(umaString.match(/[aA-zZ]/g)); // expressão regular
console.log(umaString.search(/S/)); // expressão regular
console.log(umaString.replace('Uma', 'Duas')); // expressão regular

console.log();
let umaFrase = 'o rato roeu a roupa do rei de roma.';

console.log(umaFrase.replace('r','g'));
console.log(umaFrase.replace(/r/g,'g'));

// flag g faz repetir em todos
console.log()

console.log(umaFrase.length);
console.log(umaFrase.slice(2,20));
console.log(umaFrase.slice(-5, umaFrase.length - 1)); // aqui ele vai até o final e retorna
/// console.log(umaFrase[-1]); // assim retorna undefined

console.log(umaFrase);

console.log();

console.log(umaFrase.split(' '));
console.log(umaFrase.split(' ', 2)); // retorna uma quantidade de resultados


console.log(umaFrase.toLocaleUpperCase());
console.log(umaFrase.toLocaleLowerCase());