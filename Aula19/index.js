function saudacao(nome) {
    return `Bom Dia ${nome} !`
}


const variavel = saudacao('Junior');
console.log(saudacao('Junior'));
console.log(variavel);

function soma(a, b) {
    return a + b
}

let somaDeValores = soma(5, 5);
console.log(somaDeValores);

somaDeValores = soma(-5, 5);
console.log(somaDeValores);

function multiplicacao(x = 2, y = 2) {
    return x * y
}

console.log(multiplicacao());


const raiz = function (n) {
    return Math.sqrt(n)
};                                        // NÃO ESQUECER quando for declarar uma variavel como funcao
                                          // colocar ponto e virgula no final

console.log(raiz(100))

const subtracao = (n, x) => n - x;  // Isso é uma ArrowFunction


console.log(subtracao(5, 2))