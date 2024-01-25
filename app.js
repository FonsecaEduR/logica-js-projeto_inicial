alert('Boas vindas ao jogo do número secreto');
let nsecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if(chute == nsecreto) {
    console.log('Isso ai!! Você acertou o número secreto: ', nsecreto);
} else (chute > nsecreto) {
    console.log('Que pena! Você errou, o número da sorte é menor que: ', chute);
} /*end (chute < nsecreto) {
    console.log('Que pena! Você errou, o número da sorte é maior que: ', chute);
}/*