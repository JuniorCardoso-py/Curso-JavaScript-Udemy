

function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');


    //form.onsubmit = function (evento){
    //    evento.preventDefault();
    //    console.log('Foi Enviado')
    //};
    const pessoas = [];

    function recebeUmEvento(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenonome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        console.log(nome.value, sobrenonome.value, peso.value, altura.value)
        pessoas.push(nome.value, sobrenonome.value, peso.value, altura.value)
        console.log(pessoas)
    }

    form.addEventListener('submit', recebeUmEvento)
}
meuEscopo();