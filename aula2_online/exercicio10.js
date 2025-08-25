const prompt = require("prompt-sync")();

const grade1 = Number(prompt("Digite a primeira nota: "));
const grade2 = Number(prompt("Digite a segunda nota: "));
const grade3 = Number(prompt("Digite a terceira nota: "));
const average = (grade1 + grade2 + grade3) / 3;

console.log("Média =", average);
if (media >= 7) {
    console.log("Aprovado!!!");
} else {
    console.log("Reprovado");
}