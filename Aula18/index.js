/*const alunos = ['Junior', 'Ana', 'Maria', 'Luiz', 'João',1,true, null];
console.log(alunos);
*/

const alunos = ['Junior', 'Ana', 'Maria', 'Luiz', 'João'];
console.log(alunos[0][3]);
console.log(alunos[0]);
console.log(alunos[2][3]);

alunos[0] = 'Juninn' ;// alterando
console.log(alunos);
alunos[5] = 'Luiza' ;// incrementando
console.log(alunos);
console.log(alunos.length);

// como o lenght retorna a quantidade de itens em algo
// podemos adicionar algo no final da lista utilizando-o
// pois para o indice é dififerente da quantidade de itens
// pois sempre começa do 0.

alunos[alunos.length] = 'Maykon';
alunos[alunos.length] = 'Roberta';
alunos[alunos.length] = 'Nih';
alunos[alunos.length] = 'MIh';
console.log(alunos);

console.log();

alunos.push('Miguel') // adiciona ao final da lista com função
alunos.push('Miguelzinho') // adiciona ao final da lista com função
console.log(alunos)

alunos.unshift('Amanda'); // Adiciona no começo da lista
alunos.unshift('Fabio'); // Adiciona no começo da lista
console.log(alunos);

alunos.pop(); // Remove o ultimo elemento
console.log(alunos);

// podemos salvar o elemento retirado em uma variavel
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

// Remove o primeiro elemento
alunos.shift();
console.log(alunos);

delete alunos[2] // vai deletar e deixar o elemento no local como vazio
console.log(alunos);


alunos.push(alunos[0]='Amanda'); // adiciona ao final da lista com função
