
// //Exemplo 1
// let contador = 1;
// while (contador <= 1000) {
// //
//
// }
//console.log("O número é: " + contador); contador++
//mudar incremento de 2 em 2 para ver
//console.log("Fim da contagem!");
//Exemplo 2
let contador = 1;
let texto = "";

while (contador <= 5) {
texto += contador + "<br>";
contador++;
}

document.getElementById("texto").innerHTML = texto;

let numeroSecreto = 7;
let tentativa = 1;

while (tentativa <= 3) {
let palpite = parseInt(prompt(": Digite um número entre 1 e 10:"));
if (palpite === numeroSecreto) {
console.log("Parabéns! Você acertou o número secreto");
break; // Usamos 'break' para sair do loop assim que o jogador acerta.
} else {
    console.log("Você errou. Tente novamente.");
}
tentativa = tentativa + 1;
}

if (tentativa > 3) {
console.log("Suas tentativas acabaram.");
console.log("O número secreto era " + numeroSecreto)
}