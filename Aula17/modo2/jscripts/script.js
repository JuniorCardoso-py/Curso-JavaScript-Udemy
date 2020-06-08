const numero  = Number(prompt('Digite um numero: '));
const numeroTituloId = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTituloId.innerHTML = numero;
texto.innerHTML = `Raiz quadrada ${Math.sqrt(numero)}<p />`;
texto.innerHTML += `${numero} é inteiro?: ${Number.isInteger(numero)}<p />`;
texto.innerHTML += `É NaN(Not a Number)?: ${Number.isNaN(numero)}<p />`;
texto.innerHTML += `Arredondando para cima ${Math.floor(numero)}<p />`;
texto.innerHTML += `Arredondadndo para baixo ${Math.ceil(numero)}<p />`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<p />`;