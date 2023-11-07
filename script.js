//Variável para inserir valores na Função "rankeadas"
let resultRank = rankeadas(80, 10)

function rankeadas(victory, itLost) {
    let result = victory - itLost
    return result
}


//Função para pegar o resultado "vitorias - derrotas" e retornar o nivel.
function nivelTotal() {

    let nivel = ""

    if (resultRank <= 10) {
        nivel = "Ferro"
    } else if (resultRank >= 11 && resultRank <= 20) {
        nivel = "Bronze"
    } else if (resultRank >= 21 && resultRank <= 50) {
        nivel = "Prata"
    } else if (resultRank >= 51 && resultRank <= 80) {
        nivel = "Ouro"
    } else if (resultRank >= 81 && resultRank <= 90) {
        nivel = "Diamante"
    } else if (resultRank >= 91 && resultRank <= 100) {
        nivel = "Lendário"
    } else if (resultRank >= 101) {
        nivel = "Imortal"
    }

    return "O Herói tem de saldo de " + resultRank + " está no nível de " + nivel 
}

console.log(nivelTotal())