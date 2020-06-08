let nome = 'João';
var nome2 = 'Maria'; // metodo antigo para declarar variaveis

// não se pode criar variaveis com palavras reservadas
// não se pode declarar uma variavel duas vezes com o mesmo nome, mesmo que ela não esteja atribuida a nenhum valor.
// não pode começar o nome da variavel com numero por exemplo:   let 1nome = 'Nome Qualquer';
// variaveis não podem conter traços ou espaços
// utiliza-se de camelCase, inicia se com letra minuscula exemplo:   let nomeCompletoDoUsuario = 'bla bla bla';
// NÃO UTILIZAR ""VAR"" PARA VARIAVEIS UTILIZAR LET ou CONST.

let variavel; // Nesse caso só declarei uma variavel sem nenhum valor ela é indefinida
variavel = 'Agora tenho valor, não sou mais undefined'

console.log(nome,'nasceu em 1984');
console.log('Em 2000 ',nome,' conheceu Maria');
console.log(nome,' casou-se com ',nome2,' em 2012.');
console.log(nome2,' teve um filho com ',nome,' em 2015');
console.log('O filho de ',nome,' se chama Eduardo');

console.log();

console.log(variavel);