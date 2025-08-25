const prompt = require("prompt-sync")();

const n1 = Number(prompt("Digite um número: "));
const n2 = Number(prompt("Digite outro número: "));
const operation = prompt("Digite uma operação (+, -, *, /): ");
let operationResult;
switch (operation) {
    case "+": operationResult = n1 + n2; break;
    case "-": operationResult = n1 - n2; break;
    case "*": operationResult = n1 * n2; break;
    case "/": operationResult = n1 / n2; break;
    default: console.log("Operação inválida"); break;
}
console.log("Resultado:", operationResult);