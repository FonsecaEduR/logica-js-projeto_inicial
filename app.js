alert('Boas vindas ao jogo do número secreto');
let nsecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == nsecreto) {
    alert(`Isso aí!! Você acertou o número secreto: ${nsecreto} `);
} else if (chute > nsecreto) {
    alert(`Que pena! Você errou, o número da sorte é menor que: ${chute}`);
} else {
    alert(`Que pena! Você errou, o número da sorte é menor que: ${chute}`);
}