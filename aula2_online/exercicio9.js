const prompt = require("prompt-sync")();


const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
if (num1 > num2) {
    console.log(num1, "é maior");
} else if (num2 > num1) {
    console.log(num2, "é maior");
} else {
    console.log("Os dois são iguais");
}