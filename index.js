//Esse código é um Classificador de Ranking.
// Ele pega um herói com uma certa pontuação de experiência (XP)
// e descobre qual a patente (nível) dele 
// consultando uma lista de regras.

//O programa começa definindo quem está sendo avaliado:
const heroi = {
    nome: "Jinx",
    xp: 7200
};

// Configuração dos níveis (Tabela de Regras)
// O laço vai verificar as regras de baixo para cima ou usar intervalos
const niveis = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
    { limite: Infinity, nome: "Radiante" } // Infinity representa qualquer valor acima
];

let nivelFinal = "";

// Laço de Repetição que substitui o IF/ELSE gigante
for (let i = 0; i < niveis.length; i++) {
    if (heroi.xp <= niveis[i].limite) {
        nivelFinal = niveis[i].nome;
        break; // Para o laço assim que encontrar o nível correto
    }
}

console.log(`O Herói de nome **${heroi.nome}** está no nível de **${nivelFinal}**`);
