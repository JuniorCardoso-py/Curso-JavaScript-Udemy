console.log("Junior Cardoso" && 0 && 'Maria');
console.log("Junior Cardoso" && true && 'Maria');


/* Valores que são avaliado em false

FALSY:
    0
    '' OU "" OU ``
    false
    null
    undefined
    NaN

*/

function falarOi () {
    return "Oi";
}

let naoVaiExecutar = false;
console.log(naoVaiExecutar && falarOi());

naoVaiExecutar = '';
console.log(naoVaiExecutar && falarOi());
naoVaiExecutar = ``;
console.log(naoVaiExecutar && falarOi());
naoVaiExecutar = NaN;
console.log(naoVaiExecutar && falarOi());
naoVaiExecutar = null;
console.log(naoVaiExecutar && falarOi());

let vaiExecutar = true;
console.log(vaiExecutar && falarOi());

console.log(0 || false || null || 'Junior Cardoso' || true);
console.log(0 || false || null || true || 'Junior Cardoso');

let corUsuario = '';
let corPadrao = 'Azul';
console.log(corUsuario || corPadrao)

corUsuario = 'Vermelho';
corPadrao = 'Azul';
console.log(corUsuario || corPadrao)