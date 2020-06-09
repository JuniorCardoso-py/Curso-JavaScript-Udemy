const pessoa01 = {
    nome: 'Junin',
    sobrenome: 'Cardoso',
    idade: 19
};
console.log(pessoa01.nome);
console.log(pessoa01.sobrenome);
console.log(pessoa01.idade);

function criaPessoas(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa02 = criaPessoas('Junior', 'Cardoso', 19);
console.log(pessoa02);
console.log(pessoa02.nome);
console.log(pessoa02.sobrenome);
console.log(pessoa02.idade);


/*
Tambem pode ser criado assim que o proprio JavaScript ja sabe
que deve atribuir o nome da chave como o nome do parametro

Obs: se os valores forem iguais**

function criaPessoas(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    };
}
 */