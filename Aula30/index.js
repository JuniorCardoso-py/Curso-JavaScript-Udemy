const pontosUsuarios = 1000;
const nivelVip = pontosUsuarios >= 1000 ? 'Cliente Vip' : 'Cliente Normal';



const corDeFundo = 'Rosa';
const corPadrao = corDeFundo || 'Preta';

console.log(nivelVip, corPadrao)