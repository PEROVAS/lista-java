/*1
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

/*2
let n1 = parseFloat(prompt('escreva n1'))
let n2 = parseFloat(prompt('escreva n2'))

function calcular (num1, num2) {
 const soma = num1 + num2;
 const subtracao = num1 - num2;
 const multiplicacao = num1 * num2;
 console.log(soma)
 console.log(subtracao)
 console.log(multiplicacao)
 if (num2 === 0){
    console.log("Não dá para dividir por 0!")
 } else {
    const divisao = num1 / num2;
    console.log(divisao)
 }
}
calcular(n1,n2);
*/

/*3
console.log
let numero = 10;
let delay = 1;

while (numero >=1){
    console.log(numero);
    numero--;
}
*/

/*4
let palavra = prompt('Digite sua palavra');
function inverterTexto(texto) {
    console.log(palavra.split("").reverse().join(""));
}
    invertertexto(texto)
*/

/*5
let num = prompt('Digite sua palavra:');
function contarCaracteres ( num ) {
    console.log(num.length);
}
*/


/*6
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInformacoes() {
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
    }
}
const meuCarro = new Carro('taos', 'volkswagem', '2023');
*/

/*7
let nome = prompt('Digite seu nome:');
const mensagem = 'Olá';
function mensagemPersonalizada( nome, mensagem ) {
    console.log ( mensagem + nome);
}
   */

/*8
let n1 = parseFloat(prompt('Digite primeiro seu número:'));
let n2 = parseFloat(prompt('Digite segundo seu número:'));
let n3 = parseFloat(prompt('Digite terceiro seu número:'));
function media ( n1, n2, n3 ) {
    console.log ( (n1 + n2 + n3)/3 );
}

for ( let num = 1; num < 21; num++) {
    console.log ( num)
    if (num % 3 === 0) {
        console.log ('Esse número é multiplo de 3');
    } else {
        console.log ('Esse número não é multiplo de 3');
    }
}
  */  


let pala = (prompt('Digite sua palavra:'));
function verificarPalavra ( pala ) {
    let palindroma = (pala.split("").reverse().join(""));
    if ( pala === palindroma ){
        console.log (' Essa palavra é Palindroma');
    }else{
        console.log (' Essa palavra não é Palindroma');
    }
}    

let n =  parseFloat(prompt('Digite seu número:'));
function verificarSinal ( n ) {
    if ( n > 0 ){
        console.log (' Esse número é positivo');        
    }else if(n === 0 ) {
        console.log (' Esse número é zero');      
    }else{
        console.log (' Esse número é negativo');   
    }
}


function(verificarpalndromo)
