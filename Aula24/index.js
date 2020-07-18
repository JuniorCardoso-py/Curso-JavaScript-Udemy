/*

    Operadores Lógicos

&& -> AND -> E   * Todas as expressões precisam ser verdadeiras para retonrar true
|| -> OR  -> OU  * Nem todas expressôes precisam ser verdadeiras para retornar true
!  -> NOT -> NÃO * Inverte uma expressão

 */

const sol = true
const dinheiroNoBolso = true
const contasParaPagar = false
const situacaoQualquer = false

let expressaoFalsa = sol + dinheiroNoBolso + contasParaPagar
console.log(expressaoFalsa);


console.log(sol && dinheiroNoBolso && contasParaPagar);
console.log(sol && dinheiroNoBolso);

console.log(dinheiroNoBolso || sol);
console.log(dinheiroNoBolso || contasParaPagar);

const usuario = 'Junior';
const senha = 123456;

let logar = usuario === 'Junior' && senha === 123456 ;
console.log(`O usuario logou?: ${logar}`);

logar = usuario === 'Batata' && senha === 123456 ;
console.log(`O usuario logou?: ${logar}`);

logar = usuario === 'Junior' && senha === '123456' ;
console.log(`O usuario logou?: ${logar}`);

console.log(true);
console.log(!true);
console.log(!!true);
console.log(!!!!!!!!!!!!!!!!!!!!!!!!!!!true); // Só para mostra que pode ser invertido quantas vezes quiser