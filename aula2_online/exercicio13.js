const prompt = require("prompt-sync")();

const nA = Number(prompt("Digite o primeiro número: "));
const nB = Number(prompt("Digite o segundo número: "));
const nC = Number(prompt("Digite o terceiro número: "));

console.log("Maior:", Math.max(nA, nB, nC));
console.log("Menor:", Math.min(nA, nB, nC));