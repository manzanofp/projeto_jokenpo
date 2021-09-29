var jogadorescolha = 0;
var computadorescolha = 0;
var ganhador = -1;
var jogadorpontuacao=0;
var computadorpontuacao = 0;
let jogador = prompt("Digite o seu nome de jogador: ");
document.getElementById("jogador-nome").innerHTML = jogador;


function jogar(escolha) {
    jogadorescolha = escolha;

    computadorescolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;

    if ((jogadorescolha == 1) && (computadorescolha == 1)) {
        ganhador = 0;
        document.getElementById('mensagens').innerHTML = 'EMPATE';
    }
    else if ((jogadorescolha == 1) && (computadorescolha == 2)) {
        ganhador = 2;
        document.getElementById('mensagens').innerHTML = 'IA GANHOU';
        computadorpontuacao++;
    }
    else if ((jogadorescolha == 1) && (computadorescolha == 3)) {
        ganhador = 1;
        document.getElementById('mensagens').innerHTML = 'JOGADOR GANHOU';
        jogadorpontuacao++;
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 1)) {
        ganhador = 1;
        document.getElementById('mensagens').innerHTML = 'JOGADOR GANHOU';
        jogadorpontuacao++;
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 2)) {
        ganhador = 0;
        document.getElementById('mensagens').innerHTML = 'EMPATE';
    }
    else if ((jogadorescolha == 2) && (computadorescolha == 3)) {
        ganhador = 2;
        document.getElementById('mensagens').innerHTML = 'IA GANHOU';
        computadorpontuacao++;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 1)) {
        ganhador = 2;
        document.getElementById('mensagens').innerHTML = 'IA GANHOU';
        computadorpontuacao++;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 2)) {
        ganhador = 1;
        document.getElementById('mensagens').innerHTML = 'JOGADOR GANHOU';
        jogadorpontuacao++;
    }
    else if ((jogadorescolha == 3) && (computadorescolha == 3)) {
        ganhador = 0;
        document.getElementById('mensagens').innerHTML = 'EMPATE';
    }

    

    document.getElementById("jogador-escolha-" + jogadorescolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorescolha).classList.add('selecionado');

    document.getElementById('jogador-pontos').innerHTML = jogadorpontuacao;
    document.getElementById('computador-pontos').innerHTML = computadorpontuacao;

setTimeout(() => {
    document.getElementById("jogador-escolha-1").classList.remove('selecionado');
    document.getElementById("jogador-escolha-2").classList.remove('selecionado');
    document.getElementById("jogador-escolha-3").classList.remove('selecionado');

    document.getElementById("computador-escolha-1").classList.remove('selecionado');
    document.getElementById("computador-escolha-2").classList.remove('selecionado');
    document.getElementById("computador-escolha-3").classList.remove('selecionado');

    document.getElementById('mensagens').innerHTML = '';
}, 1000);




}