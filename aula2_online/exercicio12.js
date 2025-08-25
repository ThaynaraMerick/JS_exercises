const prompt = require("prompt-sync")();

const evenOddNumber = Number(prompt("Digite um número: "));
if (evenOddNumber % 2 === 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}