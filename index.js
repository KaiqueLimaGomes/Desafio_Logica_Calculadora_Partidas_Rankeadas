//Desafio de Projeto 2 - Calculadora de partidas Rankeadas

//Altere somente os valores de VITORIAS e DERROTAS para testar o código!!!!!
let vitorias = 100; //Quantidade de vitorias
let derrotas = 5; //Quantidade de derrotas

let rank = ""; //Rank do jogador

let saldoRank = calcularPartidas(vitorias, derrotas); //Chamada da função que calcula o saldo de partidas
rank = rankHeroi(saldoRank); //Chamada da função que define o Rank do herói
exibirSaldo(saldoRank, rank); //Chamada da função que exibe o saldo de partidas

//Declaração da função que calcula o saldo de partidas
function calcularPartidas(vitorias, derrotas) {
    //Calcula o saldo de Rankeadas (vitórias - derrotas)
    let saldoRankeadas = vitorias - derrotas;
    return saldoRankeadas;
}

//Função para exibir o saldo de partidas
function exibirSaldo(saldoRank, rank) {
    console.log(`O Herói tem de saldo de ${saldoRank} pontos e está no nível de ${rank}`);
}

//Declaração da função que define o Rank do herói
//Estrutura de decisão para definir o Rank do herói
//Usando o if / if else para classificar o Rank do herói
function rankHeroi(saldoRank) {
    if (saldoRank <= 10) {
        rank = "Ferro";
    } else if (saldoRank > 11 && saldoRank < 20) {
        rank = "Bronze";
    } else if (saldoRank > 21 && saldoRank < 50) {
        rank = "Prata";
    } else if (saldoRank > 51 && saldoRank < 80) {
        rank = "Ouro";
    } else if (saldoRank > 81 && saldoRank < 90) {
        rank = "Diamante";
    } else if (saldoRank > 91 && saldoRank < 100) {
        rank = "Lendário";
    } else if (saldoRank >= 101) {
        rank = "Imortal";
    }

    return rank;
}

