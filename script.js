/*
console.log('hello world');
let numero = prompt('Digite seu número:');
function verificarPar(numero){
    if(numero % 2 === 0 ){
        console.log(numero + " é igual a par");
    }else{
        console.log(numero + " é igual a ímpar");
    }
}
verificarPar(numero);
*/

let n1 = parseFloat(prompt('escreva n1'))
let n2 = parseFloat(prompt('escreva n2'))

function calcular (nem1, num2) {
 const soma = num1 + num2;
 const subtracao = num1 - num2;
 const multiplicacao = num1 * num2;
 console.log(soma)
 console.log(subtracao)
 console.log(multiplicacao)
 if (num2 === 0){
    console.log("Não dá para dividir po 0!")
 } else {
    const divisao = num1 / num2;
    console.log(divisao)
 }
}
calcular(n1,n2)